/* eslint-disable @typescript-eslint/no-require-imports */

// 抓取官网的标签分类生成索引数据并缓存（如果分类或标签出错，请在 scripts/data-correct.js 中修正）
// 如果部分数据无法正确翻译，需要在 scripts/translate-cache.json 中修正
// 然后生成图标数据到 src/icon/demos/all/data.ts

const path = require('path');
const fs = require('fs');
const cheerio = require('cheerio');
const getUrlContent = require('./getUrlContent');
const { transformComponentName, transformFileName } = require('./utils');
const { translate } = require('./translate-utils');
const dataCorrect = require('./data-correct');

const cwd = process.cwd();
const BootstrapIconsUrl = 'https://icons.getbootstrap.com/';

// demo 数据文件
const DemoDataFilePath = path.join(cwd, 'src/icon/demos/all/data.ts');

let data = [
  // {
  //   name: '',
  //   tags: '',
  //   categories: '',
  //   cnName: '',
  //   cnTags: '',
  //   cnCategories: '',
  //   fileName: '',
  //   componentName: '',
  //   fill: false, // 是否填充风格
  //   remark: '' // 备注，用于检索
  // }
];

const processHtmlToData = (html) => {
  const $ = cheerio.load(html);
  const $list = $('#content ul.list > li');

  $list.each(function () {
    const $this = $(this);
    const name = $this.find('div.name').text();
    const tags = $this.data('tags') || name;
    const categories = dataCorrect.categories[name] || $this.data('categories') || 'other';
    const remark = dataCorrect.remark[name] ? dataCorrect.remark[name] : '';

    const fileName = transformFileName(name);
    const componentName = transformComponentName(name);

    const fill = name.indexOf('-fill') > -1;

    data.push({
      tags,
      categories,
      name,
      fileName,
      componentName,
      fill,
      remark
    });
  });
};

// 翻译 tags,categories,name
const translateData = async () => {
  for (let item of data) {
    const cnTags = await translate(item.tags);
    const cnCategories = await translate(item.categories);
    const cnName = await translate(item.name);

    item.cnTags = cnTags;
    item.cnCategories = cnCategories;
    item.cnName = cnName;
  }
};

const order = (d) => {
  return d.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

const writeDataToFile = () => {
  fs.writeFileSync(DemoDataFilePath, `export default ${JSON.stringify(order(data))}`);
};

const run = async () => {
  const htmlStr = await getUrlContent(BootstrapIconsUrl);
  // console.log(htmlStr);
  // console.log('process before data: ', data);
  processHtmlToData(htmlStr);
  // console.log('process after data: ', data);
  await translateData();

  writeDataToFile();
};

run();

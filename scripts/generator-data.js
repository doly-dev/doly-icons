/* eslint-disable @typescript-eslint/no-var-requires */
const https = require('https');
const path = require('path');
const cheerio = require('cheerio');
const glob = require('glob');
const getUrlContent = require('./getUrlContent');

const cwd = process.cwd();
const BootstrapIconsUrl = 'https://icons.getbootstrap.com/';
const BootstrapIconsNodeModulePath = path.join(cwd, 'node_modules/bootstrap-icons/icons');

function processHtml(html) {
  const $ = cheerio.load(html);
  const $tr = $('tr');

  const ret = [];

  $tr.each(function () {
    const $this = $(this);
    const code = $this.find('td').eq(1).text();
    const name = $this.find('td').eq(2).text();

    if (code && name && !isNaN(code)) {
      ret.push({
        code: code.trim(),
        name: name.trim(),
      });
    }
  });

  return ret;
}

const test = async () => {
  const htmlStr = await getUrlContent(BootstrapIconsUrl);
  console.log(htmlStr);

  // const ret = glob.sync(path.join(__dirname, '../', 'src/icons-svg/*.svg'));
  // console.log(ret.map(item => path.parse(item)));

  // console.log(new URL(BootstrapIconsUrl));
};

test();

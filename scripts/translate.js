/* eslint-disable @typescript-eslint/no-var-requires */
const fse = require('fs-extra');
const path = require('path');
const getUrlContent = require('./getUrlContent');

const waitTime = (time) => {
  const realTime = time || 100;
  return new Promise((resolve) => {
    setTimeout(resolve, realTime);
  });
};

// 处理要翻译的文本
// 如，- 转换为 空格，字母+数字 或 数字+字母 中间加空格
const processText = (text) => {
  return text
    .split('-')
    .join(' ')
    .replace(/(\s*[0-9]+\s*)/g, (m, p1) => {
      return ' ' + p1.trim() + ' ';
    })
    .trim();
};

// 缓存已翻译的值，写入文件，加速转换，还可以在缓存文件中做一些修正。
const TranslateCacheJsonFile = path.join(__dirname, './translate-cache.json');
const getTranslateCache = (text) => {
  const json = fse.readJsonSync(TranslateCacheJsonFile) || {};
  return text ? json[text] : json;
};
const setTranslateCache = (text, value) => {
  const json = getTranslateCache();
  json[text] = value;
  fse.writeJsonSync(TranslateCacheJsonFile, json);
};

let count = 0;

const translate = async (text, type = 'AUTO', delay = 300) => {
  // 从缓存中获取
  let cacheValue = getTranslateCache(text);
  if (cacheValue) {
    return Promise.resolve(cacheValue);
  }

  // 延时
  count += 1;
  await waitTime(delay * count);

  // 从缓存中获取
  cacheValue = getTranslateCache(text);
  if (cacheValue) {
    return Promise.resolve(cacheValue);
  }

  const realText = processText(text);

  const ret = await getUrlContent(
    // 1
    // `https://fanyi.youdao.com/translate?&doctype=json&type=${type}&i=${realText}`,
    // 2
    `https://fanyi.youdao.com/openapi.do?keyfrom=node-fanyi&key=110811608&type=data&doctype=json&version=1.1&q=${realText}`,
  );

  let value = text;

  console.log(text);

  try {
    const retJson = JSON.parse(ret) || {};
    // 1
    // value = retJson?.translateResult?.[0]?.[0]?.tgt;
    // 2
    value = retJson?.translation?.[0];

    if (!value) {
      value = '-';
      throw new Error(retJson);
    }
  } catch (err) {
    console.log('【translate error】text:', text, ' realText:', realText, ' result:', ret);
  }

  if (value && value !== text) {
    setTranslateCache(text, value);
  }
  return value;
};

// const run = async () => {
//   const ret = await translate('你好，世界');
//   console.log(ret);
// }

// run();

module.exports = translate;

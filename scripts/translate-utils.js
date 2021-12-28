/* eslint-disable @typescript-eslint/no-var-requires */
const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const getUrlContent = require('./getUrlContent');

/**
 * 处理翻译文本
 * 如，- 转换为 空格，字母+数字 或 数字+字母 中间加空格
 *
 * @param {string} text 需要翻译的文本
 * @returns
 */
const processTranslateText = (text) => {
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

/**
 * 获取缓存值，不传参返回全部
 *
 * @param {string} text 需要翻译的文本
 * @returns {object|string|undefined}
 */
const getTranslateCache = (text) => {
  const json = fse.readJsonSync(TranslateCacheJsonFile) || {};
  return text ? json[text] : json;
};

/**
 * 设置缓存
 *
 * @param {string} text 需要翻译的文本
 * @param {string} value 翻译后的值
 */
const setTranslateCache = (text, value) => {
  const json = getTranslateCache();
  json[text] = value;
  fse.writeJsonSync(TranslateCacheJsonFile, json);
};

/**
 * 获取翻译1
 *
 * @param {string} text 要翻译的文本
 * @param {string} [type='AUTO'] type 翻译类型，可选值：AUTO, EN2ZH_CN, ZH_CN2EN
 * @returns {Promise<string|null>}
 */
const getTranslateOne = async (text, type = 'AUTO') => {
  const res = await getUrlContent(
    `https://fanyi.youdao.com/translate?&doctype=json&type=${type}&i=${text}`,
  );
  const resJson = JSON.parse(res) || {};

  if (resJson.errorCode === 0 && resJson?.translateResult?.[0]?.[0]?.tgt) {
    return resJson?.translateResult?.[0]?.[0]?.tgt;
  }

  console.log(chalk.red('TranslateOne Error】 '), `text: ${text}`, `res: ${res}`);

  return null;
};

/**
 * 获取翻译2
 *
 * @param {string} text 要翻译的文本
 * @returns {Promise<string|null>}
 */
const getTranslateTwo = async (text) => {
  const res = await getUrlContent(
    `https://fanyi.youdao.com/openapi.do?keyfrom=node-fanyi&key=110811608&type=data&doctype=json&version=1.1&q=${text}`,
  );
  const resJson = JSON.parse(res) || {};

  if (resJson.errorCode === 0 && resJson?.translation?.[0]) {
    return resJson?.translation?.[0];
  }

  console.log(chalk.red('TranslateTwo Error】 '), `text: ${text}`, `res: ${res}`);

  return null;
};

const translate = async (text, type = 'AUTO', cache = true) => {
  // 从缓存中获取
  if (cache) {
    const cacheValue = getTranslateCache(text);
    if (cacheValue) {
      return Promise.resolve(cacheValue);
    }
  }

  const translateText = processTranslateText(text);

  let value = await getTranslateOne(translateText, type);

  if (!value) {
    value = await getTranslateTwo(translateText);
  }

  if (!value) {
    value = text;
  } else {
    cache && setTranslateCache(text, value);
  }
  return value;
};

module.exports = {
  processTranslateText,
  getTranslateCache,
  setTranslateCache,
  translate,
};

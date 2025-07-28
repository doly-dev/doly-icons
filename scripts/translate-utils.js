/* eslint-disable @typescript-eslint/no-require-imports */
const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const http = require('http');
const { randomString } = require('util-helpers');
const md5 = require('crypto-js/md5');
const { isArray, isObject } = require('ut2');

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
 * 百度翻译， http://api.fanyi.baidu.com/api/trans/product/desktop 开启服务
 * @param {string} text 需要翻译的文本
 * @returns
 */
const getTranslate = (text) => {
  return new Promise((resolve, reject) => {
    const AppId = '20230913001815870';
    const SecretKey = 'Ge0dDALydnIKIzxMLhgC';
    const salt = randomString(8, '0123456789');

    const str1 = AppId + text + salt + SecretKey;
    const str1Md5 = md5(str1).toString();

    const url = `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${text}&from=en&to=zh&appid=${AppId}&salt=${salt}&sign=${str1Md5}`;

    http.get(url, (res) => {
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => {
        rawData += chunk;
      });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          resolve(parsedData);
        } catch (e) {
          console.log('translate error: ', e);
          reject(e);
        }
      });
    });
  });
};

const translate = async (text, cache = true) => {
  // 从缓存中获取
  if (cache) {
    const cacheValue = getTranslateCache(text);
    if (cacheValue) {
      return Promise.resolve(cacheValue);
    }
  }

  const translateText = processTranslateText(text);
  const res = await getTranslate(translateText);

  let value =
    isObject(res) && isArray(res.trans_result) && res.trans_result[0]
      ? res.trans_result[0].dst
      : '';

  if (!value) {
    console.log(chalk.red('【Translate Error】'), `text: ${text}`);
    value = text;
  } else {
    if (cache) {
      setTranslateCache(text, value);
    }
  }
  return value;
};

module.exports = {
  processTranslateText,
  getTranslateCache,
  setTranslateCache,
  translate
};

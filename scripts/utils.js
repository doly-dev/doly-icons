/* eslint-disable @typescript-eslint/no-var-requires */
const { camelCase, upperFirst, words } = require('ut2');

const regEnglish = /[a-z]/i;

// 首字母是否为英语
const firstIsEnglish = (str) => regEnglish.test(str.substring(0, 1));

/**
 * 转换为 react 属性名
 *
 * 如，fill-rule => fillRule
 *
 * @param {string} propName 属性名称
 * @returns
 */
const transformPropName = (propName) => {
  return camelCase(propName);
};

/**
 * 转换为组件名称，注意额外处理非字母开头的组件
 *
 * 如，arrow-up => ArrowUp, 123 => Icon123
 *
 * @param {string} componentName 组件名
 * @returns
 */
const transformComponentName = (componentName) => {
  return words(componentName)
    .map((strItem, i) => {
      if (i === 0 && !firstIsEnglish(strItem)) {
        return `Icon${strItem}`;
      }
      return upperFirst(strItem);
    })
    .join('');
};

/**
 * 转换为组件文件名
 *
 * 如，arrow-up => ArrowUp
 *
 * @param {string} componentName 组件名
 * @returns
 */
const transformFileName = (componentName) => {
  return upperFirst(camelCase(componentName));
};

module.exports = {
  transformPropName,
  transformComponentName,
  transformFileName,
};

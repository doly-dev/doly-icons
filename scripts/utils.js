// 首字母大写
const capitalize = (str) => str.substring(0, 1).toUpperCase() + str.substring(1);

const regEnglish = /[a-z]/i;

// 首字母是否为英语
const isInitialEnglish = (str) => regEnglish.test(str.substring(0, 1));

/**
 * 转换为 react 属性名
 *
 * 如，fill-rule => fillRule
 *
 * @param {string} propName 属性名称
 * @returns
 */
const transformPropName = (propName) => {
  return propName
    .split('-')
    .filter((strItem) => !!strItem)
    .map((strItem, i) => {
      if (i === 0) {
        return strItem;
      }
      return capitalize(strItem);
    })
    .join('');
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
  return componentName
    .split('-')
    .filter((strItem) => !!strItem)
    .map((strItem, i) => {
      if (i === 0 && !isInitialEnglish(strItem)) {
        return `Icon${strItem}`;
      }
      return capitalize(strItem);
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
  return componentName
    .split('-')
    .filter((strItem) => !!strItem)
    .map((strItem) => capitalize(strItem))
    .join('');
};

/**
 * 延时触发 Promise
 *
 * @param {number} [time=100] time 延后时长，单位ms
 * @returns
 */
const waitTime = (time) => {
  const realTime = time || 100;
  return new Promise((resolve) => {
    setTimeout(resolve, realTime);
  });
};

module.exports = {
  transformPropName,
  transformComponentName,
  transformFileName,
  waitTime,
};

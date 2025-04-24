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
 * @see {@link https://zh-hans.react.dev/reference/react-dom/components/common#common-props | react props}
 * @param {string} propName 属性名称
 * @returns
 * @example
 * const svgStr = '<svg xlink:actuate="a" xlink:b="x" xlink:c aria-label='1234'><a x:link='123' data-bool="1" dat-arr="222" /></svg>';
 * transformPropName(svgStr);
 * // `<svg xlinkActuate="a" xlinkB="x" aria-label='1234'><a xLink='123' data-bool="1" datArr="222" /></svg>`
 */
const transformPropName = (elStr) => {
  return elStr
    .replace(/<.*?\/?>/g, (match) => {
      const n = match.replace(/(\s)(\S*?:\S*?)([=>\s])/g, (match2, p1, p2, p3) => {
        // console.log('match2:', match2, ' p1:', p1, ' p2:', p2, ' p3:', p3);
        return p1 + camelCase(p2) + p3;
      });
      return n;
    })
    .replace(/(\S*-\S*)=/g, (match, p1) => {
      if (p1.indexOf('aria-') === 0 || p1.indexOf('data-') === 0) {
        return `${p1}=`;
      }
      return `${camelCase(p1)}=`;
    });
};

// console.log(
//   transformPropName(
//     '<svg xlink:actuate="a" xlink:b="x" xlink:c aria-label=\'1234\'><a x:link=\'123\' data-bool="1" dat-arr="222" /></svg>',
//   ),
// );

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

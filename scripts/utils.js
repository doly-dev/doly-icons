/* eslint-disable @typescript-eslint/no-var-requires */
const { camelCase, upperFirst, words } = require('ut2');

const regEnglish = /[a-z]/i;

// 首字母是否为英语
const firstIsEnglish = (str) => regEnglish.test(str.substring(0, 1));

const transformKey = (str) => {
  return words(str)
    .map((item, index) => (index === 0 ? item : upperFirst(item)))
    .join('');
};

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
  return elStr.replace(/<(\S*?\s)(.*?)(\/?>)/g, (match, tag, props, end) => {
    // console.log('match:', match);
    // console.log('tag:', tag);
    // console.log('props:', props);
    // console.log('end:', end);
    const innerProps = props.replace(/(\S+?)=(\S+)/g, (m, p1, p2) => {
      // console.log('m:', m);
      // console.log('p1:', p1, ' t:', transformKey(p1));
      // console.log('p2:', p2);
      if (p1.indexOf('aria-') === 0 || p1.indexOf('data-') === 0) {
        return m;
      }
      return `${transformKey(p1)}=${p2}`;
    });

    // const innerProps = props
    //   .split(' ')
    //   .map((prop) => {
    //     console.log('prop: ', prop);
    //     if (prop.indexOf('aria-') === 0 || prop.indexOf('data-') === 0) {
    //       return prop;
    //     }
    //     const equalIndex = prop.indexOf('=');
    //     const hasEqual = equalIndex > -1;
    //     const k = hasEqual ? prop.substring(0, equalIndex) : prop;
    //     const v = hasEqual ? prop.substring(equalIndex + 1) : '';
    //     return transformKey(k) + (hasEqual ? `=${v}` : '');
    //   })
    //   .join(' ');

    return `<${tag}${innerProps}${end}`;
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

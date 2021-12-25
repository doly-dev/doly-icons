/**
 * 去掉 svg class
 *
 * @param {string} svgStr svg 字符串
 * @returns
 */
const processSvg = (svgStr) => {
  return (
    svgStr
      // .replace('width="16" height="16"', 'width="1em" height="1em"')
      .replace(/\sclass=".*?"/, '')
  );
};

module.exports = processSvg;

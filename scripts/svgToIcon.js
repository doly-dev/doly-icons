/* eslint-disable @typescript-eslint/no-var-requires */
const { transformComponentName, transformPropName } = require('./utils');

/**
 * svg 转为 icon组件
 *
 * @param {string} name 文件/组件名称
 * @param {string} svgStr svg 字符串
 * @returns
 */
const svgToIcon = (name, svgStr) => {
  const componentName = transformComponentName(name);
  const realSvgStr = svgStr
    .replace('width="16" height="16"', 'width="1em" height="1em"')
    .replace('viewBox="0 0 16 16"', 'viewBox="0 0 16 16" {...svgProps}')
    .replace(/\sclass=".*?"/, '')
    .replace(/(\S*-\S*)=/g, (match, p1) => {
      return `${transformPropName(p1)}=`;
    });

  return `import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ${componentName} = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="${name}" {...restProps} ref={ref}>
      ${realSvgStr}
    </IconBase>
  );
});

${componentName}.displayName = '${componentName}';

export default ${componentName};  
`;
};

module.exports = svgToIcon;

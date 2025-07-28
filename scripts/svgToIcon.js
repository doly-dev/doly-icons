/* eslint-disable @typescript-eslint/no-require-imports */
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
  const realSvgStr = transformPropName(
    svgStr
      .replace('width="16" height="16"', 'width="1em" height="1em"')
      .replace('viewBox="0 0 16 16"', 'viewBox="0 0 16 16" {...childProps}')
      .replace(/\sclass=".*?"/, '')
  );

  return `import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ${componentName}: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="${name}"
      {...props}
      renderChild={(childProps) => (
        ${realSvgStr}
      )}
    />
  );

export default ${componentName};
`;
};

module.exports = svgToIcon;

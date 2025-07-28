/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path');

const cwd = process.cwd();
const BootstrapIconsUrl = 'https://icons.getbootstrap.com/';
const BootstrapIconsNodeModulePath = path.join(cwd, 'node_modules/bootstrap-icons/icons');

// 输出处理后的 svg 文件到指定目录
const OutputSvgAssetsPath = path.join(cwd, './public/assets/icons');

// 输出 svg icon 目录
const OutputSvgIconsPath = path.join(cwd, 'src/icons');

module.exports = {
  cwd,
  BootstrapIconsUrl,
  BootstrapIconsNodeModulePath,
  OutputSvgIconsPath,
  OutputSvgAssetsPath
};

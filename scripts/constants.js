/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const cwd = process.cwd();
const BootstrapIconsUrl = 'https://icons.getbootstrap.com/';
const BootstrapIconsNodeModulePath = path.join(cwd, 'node_modules/bootstrap-icons/icons');

// 输出svg icon目录
const OutputSvgIconsPath = path.join(cwd, 'src/icons');

module.exports = {
  cwd,
  BootstrapIconsUrl,
  BootstrapIconsNodeModulePath,
  OutputSvgIconsPath,
};

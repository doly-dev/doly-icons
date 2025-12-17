/* eslint-disable @typescript-eslint/no-require-imports */

// feature: 将 bootstrap-icons 的图标处理到 src/icons 目录下

const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const fse = require('fs-extra');
const glob = require('glob');
const { transformComponentName, transformFileName } = require('./utils');
const svgToIcon = require('./svgToIcon');

const { BootstrapIconsNodeModulePath, OutputSvgIconsPath } = require('./constants');

const getAllSvgPath = () => {
  return glob.sync(`${BootstrapIconsNodeModulePath}/*.svg`);
};

// 存放 icon 组件名称，用于输出 icons-index.ts
const IconsIndex = [];
const IconIndexFile = path.join(OutputSvgIconsPath, '../icons-index.ts');
const writeIconsIndex = () => {
  fse.removeSync(IconIndexFile);
  let data = '';
  IconsIndex.forEach((iconItem) => {
    data += `export { default as ${iconItem[1]} } from './icons/${iconItem[0]}';\r\n`; // 不使用os.EOL，避免不同系统操作导致输出不同
  });
  writeFileSync(IconIndexFile, data);
};

const writeSvgIconToFile = (svgPath, callback) => {
  // 使用同步，避免组件顺序错乱（虽然没有什么影响）
  const svgStr = readFileSync(svgPath, { encoding: 'utf8' });

  const fileObj = path.parse(svgPath);
  const fileName = transformFileName(fileObj.name);
  const componentName = transformComponentName(fileObj.name);
  const svgIconFile = path.join(OutputSvgIconsPath, `${fileName}.tsx`);
  const svgIconData = svgToIcon(fileObj.name, svgStr);
  writeFileSync(svgIconFile, svgIconData);

  callback(fileName, componentName);
};

const generatorIcons = async () => {
  const allSvgPath = getAllSvgPath();

  fse.removeSync(OutputSvgIconsPath);
  fse.mkdirSync(OutputSvgIconsPath);

  allSvgPath.forEach((svgPath) =>
    writeSvgIconToFile(svgPath, (fileName, componentName) => {
      // 文件名和组件名可能不一样
      IconsIndex.push([fileName, componentName]);
    })
  );

  writeIconsIndex();

  // test
  // const testFile = path.join(BootstrapIconsNodeModulePath, './arrow-up.svg');
  // readFile(testFile, { encoding: 'utf8' }, (err, data) => {
  //   if (err) throw err;
  //   const fileObj = path.parse(testFile);
  //   console.log(svgToIcon(fileObj.name, data));
  // });
};

const run = async () => {
  await generatorIcons();
};

run();

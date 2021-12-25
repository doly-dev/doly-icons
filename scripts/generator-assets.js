/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const fse = require('fs-extra');
const glob = require('glob');
const processSvg = require('./processSvg');

const { BootstrapIconsNodeModulePath, OutputSvgAssetsPath } = require('./constants');

const getAllSvgPath = () => {
  return glob.sync(`${BootstrapIconsNodeModulePath}/*.svg`);
};

const writeSvgIconToFile = (svgPath) => {
  const svgStr = readFileSync(svgPath, { encoding: 'utf8' });
  const fileObj = path.parse(svgPath);
  const svgIconFile = path.join(OutputSvgAssetsPath, `${fileObj.base}`);
  const svgIconData = processSvg(svgStr);
  writeFileSync(svgIconFile, svgIconData);
};

const generatorAssets = async () => {
  const allSvgPath = getAllSvgPath();

  // 需手动创建 public/assets 文件夹，用于下载 svg
  fse.removeSync(OutputSvgAssetsPath);
  fse.mkdirsSync(OutputSvgAssetsPath);

  allSvgPath.forEach((svgPath) => writeSvgIconToFile(svgPath));
};

const run = async () => {
  await generatorAssets();
};

run();

import { createContext } from 'react';
import { CategoriesOptions } from './dataMain';
import { EBoolType, ETheme, EClickIconAction } from './constants';

export const DefaultFilter = {
  fontSize: 32,
  color: '#333',
  keyword: '',
  theme: ETheme.All,
  category: CategoriesOptions[0].value,
};

export const DefaultConfig = {
  // 复制/下载 PNG
  // pngEncoderOptions: 1, // 图片质量
  pngBackgroundColor: 'rgba(0,0,0,0)', // 背景色
  pngSize: 480, // 图片尺寸，2的倍数

  // // 复制/下载 SVG
  // svgStyle: 'current', // 当前 或 原图标

  // 其他操作
  clickIconAction: EClickIconAction.CopySvg, // 点击图标操作
  isShowFilter: EBoolType.Yes, // 是否显示筛选表单
};

export default createContext<typeof DefaultFilter & typeof DefaultConfig>({
  ...DefaultFilter,
  ...DefaultConfig,
});

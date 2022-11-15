import { createContext } from 'react';
import type { IconClassDataItem } from './dataMain';
import { CategoriesOptions } from './dataMain';
import { Theme } from './enum';

export const DefaultFilter = {
  fontSize: 32,
  color: '#333',
  keyword: '',
  theme: Theme.All,
  category: CategoriesOptions[0].value,
};

export const DefaultConfig = {
  // 复制/下载 PNG
  pngEncoderOptions: 1, // 图片质量
  pngBackgroundColor: 'transparent', // 背景色
  pngSize: 480, // 图片尺寸，2的倍数

  // // 复制/下载 SVG
  // svgStyle: 'current', // 当前 或 原图标
};

export default createContext<
  typeof DefaultFilter & typeof DefaultConfig & { result: IconClassDataItem[] }
>({
  ...DefaultFilter,
  ...DefaultConfig,
  result: [],
});

import { download, fileReader } from 'util-helpers';

export const processSvg = (svgStr: string, fontSize: number | string, color: string) => {
  const size = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
  return svgStr
    .replace('width="16" height="16"', `width="${size}" height="${size}"`)
    .replace('fill="currentColor"', `fill="${color}"`);
};

export const downloadSvg = (
  url: string,
  fileName: string,
  { fontSize, color }: { fontSize: number | string; color: string },
) => {
  download(url, {
    dataType: 'url',
    fileName,
    transformResponse: async (res) => {
      const text = await fileReader(res, 'text');
      const ret = processSvg(text, fontSize, color);
      return new Blob([ret], { type: res.type });
    },
  });
};

export const formatPx = (num: number | string) => {
  if (typeof num === 'string') {
    return num;
  }
  if (typeof num === 'number') {
    return `${num}px`;
  }
  return num;
};

export const pixelRatio = window?.devicePixelRatio || 1;

export const resetScrollTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

export const isIE: boolean =
  typeof window === 'object' && (!!window.ActiveXObject || 'ActiveXObject' in window);

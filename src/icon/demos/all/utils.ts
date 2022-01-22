const ajax = (
  url: string,
  callback: (res: any) => void,
  responseType?: XMLHttpRequestResponseType,
) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  if (responseType) {
    xhr.responseType = responseType;
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.response);
    }
  };
  xhr.send();
};

export const download = (url: string, fileName: string) => {
  const a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('download', fileName);
  a.click();
};

export const downloadBlob = (blob: Blob, fileName: string) => {
  const blobUrl = URL.createObjectURL(blob);
  download(blobUrl, fileName);
  URL.revokeObjectURL(blobUrl);
};

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
  ajax(
    url,
    (res) => {
      // console.log(res);
      const fr = new FileReader();
      fr.onload = () => {
        // console.log(fr.result);
        const ret = processSvg(fr.result as string, fontSize, color);
        // console.log(ret);
        const blob = new Blob([ret], { type: res.type });
        // console.log(blob);
        downloadBlob(blob, fileName);
      };
      fr.readAsText(res);
    },
    'blob',
  );
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

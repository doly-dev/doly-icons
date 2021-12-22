/* eslint-disable @typescript-eslint/no-var-requires */
const http = require('http');
const https = require('https');
const iconv = require('iconv-lite');

const getUrlContent = (url) => {
  const { protocol } = new URL(url);
  const httpMod = protocol === 'http' ? http : https;

  return new Promise((resolve, reject) => {
    httpMod
      .get(url, (res) => {
        let chunks = [];
        let size = 0;

        res.on('data', (data) => {
          // 防止中文乱码
          chunks.push(data);
          size += data.length;
        });

        res.on('end', () => {
          const buf = Buffer.concat(chunks, size);
          const str = iconv.decode(buf, 'utf8');
          resolve(str);
        });
      })
      .on('error', reject);
  });
};

module.exports = getUrlContent;

/* eslint-disable @typescript-eslint/no-var-requires */
const http = require('http');
const https = require('https');
const iconv = require('iconv-lite');

// 生成随机IP
function getRandomIP() {
  return Array.from(Array(4))
    .map(() => parseInt(Math.random() * 255))
    .join('.');
}

const getUrlContent = (url) => {
  const { protocol } = new URL(url);
  const httpMod = protocol === 'http' ? http : https;

  return new Promise((resolve, reject) => {
    httpMod
      .get(
        url,
        {
          headers: {
            rejectUnauthorized: false,
            'Postman-Token': Date.now(),
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent':
              'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
            'X-Forwarded-For': getRandomIP(),
          },
        },
        (res) => {
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
        },
      )
      .on('error', reject);
  });
};

module.exports = getUrlContent;

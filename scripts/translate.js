/* eslint-disable @typescript-eslint/no-var-requires */
const getUrlContent = require('./getUrlContent');

const waitTime = (time) => {
  const realTime = time || 100;
  return new Promise((resolve) => {
    setTimeout(resolve, realTime);
  });
};

// TODO: 根据逗号分词翻译，便于个别单词修正。例如 doc，有道翻译为“医生”，实际为“文档”
// TODO: 缓存已翻译的值，加速转换。

// 参考：https://www.cnblogs.com/murenziwei/p/14673130.html
const translate = async (txt, type = 'AUTO', delay = 300) => {
  // 延时，防止IP被封
  await waitTime(delay);
  const ret = await getUrlContent(
    `https://fanyi.youdao.com/translate?&doctype=json&type=${type}&i=${txt}`,
  );
  const retJson = JSON.parse(ret) || {};
  return retJson?.translateResult?.[0]?.[0]?.tgt || txt;
};

// const test = async () => {
//   const ret = await translate('花花,世界', 'ZH_CN2EN');
//   console.log(ret);
// }

// test();

module.exports = translate;

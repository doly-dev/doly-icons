/* eslint-disable @typescript-eslint/no-var-requires */
const { translate, processTranslateText } = require('./translate-utils');

const testProcessTranslateText = () => {
  console.log(processTranslateText('123') === '123');
  console.log(processTranslateText('active-123-fill') === 'active 123 fill');
  console.log(processTranslateText('active-123') === 'active 123');
};

const testTranslate = async () => {
  const res1 = await translate('世界', false);
  const res2 = await translate('123');

  console.log(res1);
  console.log(res2);
};

testProcessTranslateText();
testTranslate();

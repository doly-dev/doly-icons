/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { transformPropName } = require('./utils');

const svgStr =
  '<svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps} xlink:actuate="a" xlink:b="x" xlink:c aria-label=\'1234\'><a x:link=\'123\' data-bool="1" dat-arr="222" /></svg>';
const expected =
  '<svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps} xlinkActuate="a" xlinkB="x" xlink:c aria-label=\'1234\'><a xLink=\'123\' data-bool="1" datArr="222" /></svg>';
// const expected2 =
//   '<svg xmlns="http://www.w3.org/2000/svg" xlinkActuate="a" xlinkB="x" xlinkC aria-label=\'1234\'><a xLink=\'123\' data-bool="1" datArr="222" /></svg>';
const result = transformPropName(svgStr);
assert.strictEqual(result, expected);

const result2 = transformPropName('< key="12"></>');
assert.strictEqual(result2, '< key="12"></>');

console.log('Test passed!');

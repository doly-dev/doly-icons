/* eslint-disable @typescript-eslint/no-var-requires */
const assert = require('assert');
const { transformPropName } = require('./utils');

const svgStr =
  '<svg xlink:actuate="a" xlink:b="x" xlink:c aria-label=\'1234\'><a x:link=\'123\' data-bool="1" dat-arr="222" /></svg>';
const expected =
  '<svg xlinkActuate="a" xlinkB="x" xlinkC aria-label=\'1234\'><a xLink=\'123\' data-bool="1" datArr="222" /></svg>';
const result = transformPropName(svgStr);
assert.strictEqual(result, expected);

console.log('Test passed!');

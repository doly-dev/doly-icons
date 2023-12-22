const { prettier } = require('@umijs/fabric');

module.exports = {
  ...prettier,
  plugins: ['prettier-plugin-two-style-order'],
};

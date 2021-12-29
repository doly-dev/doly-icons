const COMMON_CONFIG = {
  // lessInBabelMode: true,
  // injectCSS: true,
  // extractCSS: false,
};

export default [
  {
    ...COMMON_CONFIG,
    esm: 'babel',
    runtimeHelpers: true,
  },
  {
    ...COMMON_CONFIG,
    cjs: 'babel',
  },
  // {
  //   ...COMMON_CONFIG,
  //   umd: {
  //     name: 'dolyIcons',
  //     globals: {
  //       react: 'window.React'
  //     },
  //     minFile: true
  //   }
  // }
];

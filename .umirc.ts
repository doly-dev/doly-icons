import { defineConfig } from 'dumi';
import pkg from './package.json';

const MajorVersionNumber = Number(pkg.version.split('.')[0]);
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;

// const preMajorVersionNumber = MajorVersionNumber - 1;
// const preVersionSiteRoot = `refs/heads/v${preMajorVersionNumber}`;

const version = process.env.BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const isProd = process.env.NODE_ENV === 'production';

const serverRootDirect = isProd ? 'https://doly-dev.github.io/doly-icons/' : '/';
const logo = 'https://doly-dev.github.io/logo.png';
const favicon = 'https://doly-dev.github.io/favicon.png';

const publicPath = serverRootDirect + version + '/';

const prodConfig: any = {};

if (isProd) {
  prodConfig.headScripts = [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-C5R17JSQCN',
      async: true,
    },
    {
      content: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-C5R17JSQCN');
    `,
    },
  ];
  prodConfig.chunks = ['vendors', 'umi'];
  prodConfig.chainWebpack = function (config, { webpack }) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: 'all',
              name: 'vendors',
              priority: -10,
              enforce: true,
            },
          },
        },
      },
    });
  };
}

export default defineConfig({
  title: 'doly-icons',
  publicPath,
  logo,
  favicon,
  outputPath: 'docs-dist',
  mode: 'site',
  history: {
    type: 'hash',
  },
  hash: true,
  define: {
    PATH_ROOT: isProd ? `/doly-icons/${version}/` : '/',
  },
  locales: [
    ['zh-CN', '中文'],
    ['en-US', 'English'],
  ],
  navs: {
    'zh-CN': [
      {
        title: '图标库',
        path: '/icons',
      },
      {
        title: '文档',
        path: '/documents',
      },
      // {
      // title: `v${preMajorVersionNumber}.x`,
      // path: `https://doly-dev.github.io/doly-icons/${preVersionSiteRoot}/index.html`
      // },
      {
        title: 'GitHub',
        path: 'https://github.com/doly-dev/doly-icons',
      },
      {
        title: '更新日志',
        path: 'https://github.com/doly-dev/doly-icons/releases',
      },
    ],
    'en-US': [
      {
        title: 'Icons',
        path: '/en-US/icons',
      },
      {
        title: 'Docs',
        path: '/en-US/documents',
      },
      // {
      // title: `v${preMajorVersionNumber}.x`,
      // path: `https://doly-dev.github.io/doly-icons/${preVersionSiteRoot}/index.html`
      // },
      {
        title: 'GitHub',
        path: 'https://github.com/doly-dev/doly-icons',
      },
      {
        title: 'ChangeLog',
        path: 'https://github.com/doly-dev/doly-icons/releases',
      },
    ],
  },
  ...(isProd
    ? {
        nodeModulesTransform: {
          type: 'all',
        },
        targets: {
          ie: 11,
        },
      }
    : {
        // https://github.com/umijs/umi/issues/6766
        mfsu: {},
        nodeModulesTransform: {
          type: 'none',
        },
      }),
  ...prodConfig,
  // more config: https://d.umijs.org/config
});

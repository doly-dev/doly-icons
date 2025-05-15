import { defineConfig } from 'dumi';
import pkg from './package.json';

const isDev = process.env.NODE_ENV === 'development';

const MajorVersionNumber = Number(pkg.version.split('.')[0]);
const versionSiteRoot = `refs/heads/v${MajorVersionNumber}`;

const preMajorVersionNumber = MajorVersionNumber - 1;
const preVersionSiteRoot = `refs/heads/v${preMajorVersionNumber}`;

const version = process.env.BUIDL_DOC_VERSION ? versionSiteRoot : 'latest';

const publicPath = isDev ? '/' : `/${pkg.name}/${version}/`;

export default defineConfig({
  themeConfig: {
    name: pkg.name,
    logo: 'https://doly-dev.github.io/logo.png',
    nav: {
      'zh-CN': [
        {
          title: '文档',
          link: '/documents',
        },
        {
          title: '图标库',
          link: '/icons',
        },
        // {
        // title: `v${preMajorVersionNumber}.x`,
        // link: `https://doly-dev.github.io/${pkg.name}/${preVersionSiteRoot}/index.html`
        // },
        {
          title: 'GitHub',
          link: `https://github.com/doly-dev/${pkg.name}`,
        },
        {
          title: '更新日志',
          link: `https://github.com/doly-dev/${pkg.name}/releases`,
        },
      ],
      'en-US': [
        {
          title: 'Docs',
          link: '/en-US/documents',
        },
        {
          title: 'Icons',
          link: '/en-US/icons',
        },
        // {
        // title: `v${preMajorVersionNumber}.x`,
        // link: `https://doly-dev.github.io/${pkg.name}/${preVersionSiteRoot}/index.html`
        // },
        {
          title: 'GitHub',
          link: `https://github.com/doly-dev/${pkg.name}`,
        },
        {
          title: 'ChangeLog',
          link: `https://github.com/doly-dev/${pkg.name}/releases`,
        },
      ],
    },
    footer: 'doly-dev | Copyright © 2021-present',
  },
  favicons: ['https://doly-dev.github.io/favicon.png'],

  base: publicPath,
  publicPath,
  outputPath: 'docs-dist',
  define: {
    PATH_ROOT: publicPath,
  },
  locales: [
    { id: 'zh-CN', name: '中文' },
    { id: 'en-US', name: 'English' },
  ],
  analytics: {
    ga_v2: 'G-C5R17JSQCN',
  },
  styleLoader: {},
  // more config: https://d.umijs.org/config
});

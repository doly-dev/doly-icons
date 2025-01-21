---
order: 1
toc: content
---

# Instruction

React icon component based on [Bootstrap Icons].

[![npm][npm]][npm-url] ![GitHub]

## Install

```shell
npm install doly-icons
```

```shell
yarn add doly-icons
```

```shell
pnpm add doly-icons
```

Then directly introduce the icons you need:

```typescript
import { Gear, HeartFill } from 'doly-icons';
```

The current mainstream construction tools all support [Tree Sharking](https://webpack.js.org/guides/tree-shaking/) technology, so there is no need to worry about the package size after construction.

In addition to the built-in Bootstrap icons, it also supports custom icons and [SVG Symbol]. For details, please see the example below.

## Code demo

### Basic usage

By setting `fontSize` `color` you can change the size and color of the icon of style.

<code src='../../src/icon/demos/basic.tsx'></code>

### Custom icon

It is recommended to use colors `currentColor` and set width and height to `1em` facilitate adjustment according to business scenarios.

<code src='../../src/icon/demos/define.tsx'></code>

### Use SVG Symbol icons

<!-- 在 [iconfont] 上将图标添加到 `我的项目` ，进入项目，生成在线链接，选择 `Symbol` 。 -->

It is convenient for developers to call icons on [iconfont] or use custom SVG Symbols . _Refer to [iconfont.cn usage help](https://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code)._

<code src='../../src/icon/demos/svg-symbol.tsx' iframe=100></code>

### Use CSS variables

> Understanding [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)、[How to define css variables in style attribute in React and typescript](https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript)

<code src='../../src/icon/demos/css-variable.tsx'></code>

### Global configuration

> If you need to set the size and color uniformly, it is recommended to use CSS variables

Component properties have higher priority than context, and class and style will be merged internally.

<!-- If a different font size will result in arrhythmia, affecting the presentation effect (under `vertical-align: -0.125em` the influence). -->

<code src='../../src/icon/demos/provider.tsx'></code>

<embed src="../../README.en-US.md#L81-L1000"></embed>

[Bootstrap Icons]: https://icons.getbootstrap.com/
[iconfont]: https://www.iconfont.cn/
[svg symbol]: https://css-tricks.com/svg-symbol-good-choice-icons/
[npm]: https://img.shields.io/npm/v/doly-icons.svg
[npm-url]: https://npmjs.com/package/doly-icons
[github]: https://img.shields.io/github/license/doly-dev/doly-icons.svg

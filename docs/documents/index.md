---
order: 1
toc: content
---

# 使用说明

基于 [Bootstrap Icons] 的 React 图标组件。

[![npm][npm]][npm-url] ![GitHub]

## 安装

:::code-group

```shell [npm]
npm install doly-icons
```

```shell [yarn]
yarn add doly-icons
```

```shell [pnpm]
pnpm add doly-icons
```

:::

然后直接引入你需要的图标：

```typescript
import { Gear, HeartFill } from 'doly-icons';
```

目前主流的构建工具都支持 [Tree Sharking](https://webpack.js.org/guides/tree-shaking/) 技术，无需担心构建后的包大小。

除了内置的 Bootstrap 图标外，还支持自定义图标和 [SVG Symbol] ，具体请查看下面示例。

## 代码演示

### 基础用法

通过设置 `fontSize` `color` 样式可以改变图标的尺寸和颜色。

<code src='../../src/icon/demos/basic.tsx'></code>

### 自定义图标

建议颜色使用 `currentColor`， 宽高设为 `1em` ，方便根据业务场景调整。

<code src='../../src/icon/demos/define.tsx'></code>

### 使用 SVG Symbol 图标

<!-- 在 [iconfont] 上将图标添加到 `我的项目` ，进入项目，生成在线链接，选择 `Symbol` 。 -->

方便开发者调用在 [iconfont] 上的图标 或者 使用自定义的 [SVG Symbol] 。_参考 [iconfont.cn 使用帮助](https://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code)。_

<code src='../../src/icon/demos/svg-symbol.tsx' iframe=100></code>

### 使用 CSS 变量

> 了解 [CSS 变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)、[How to define css variables in style attribute in React and typescript](https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript)

<code src='../../src/icon/demos/css-variable.tsx'></code>

### 全局配置

> 如果需要全局设置大小和颜色，建议使用 CSS 变量

组件属性优先级高于上下文，内部会将 class 和 style 进行合并。

<!-- 如果字体大小不同会导致对不齐，影响演示效果（受 `vertical-align: -0.125em` 影响）。 -->

<code src='../../src/icon/demos/provider.tsx'></code>

<embed src="../../README.md#L77-L1000"></embed>

[Bootstrap Icons]: https://icons.getbootstrap.com/
[iconfont]: https://www.iconfont.cn/
[svg symbol]: https://css-tricks.com/svg-symbol-good-choice-icons/
[npm]: https://img.shields.io/npm/v/doly-icons.svg
[npm-url]: https://npmjs.com/package/doly-icons
[github]: https://img.shields.io/github/license/doly-dev/doly-icons.svg

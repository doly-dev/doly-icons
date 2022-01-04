---
order: 1
---

# Instruction

The icon is based on the [official Bootstrap icon library] for React component encapsulation, which is convenient for designers and developers to use (quick search in the [icon library](/en-US/icons)).

> Currently using v1.7.2, there are more than 1500 icons that you can use in UI libraries or projects.

Install

```bash
npm install doly-icons --save
# or
yarn add doly-icons
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

<code src='../../src/icon/demos/basic.tsx' />

### Custom icon

It is recommended to use colors `currentColor` and set width and height to `1em` facilitate adjustment according to business scenarios.

<code src='../../src/icon/demos/define.tsx' />

### Use SVG Symbol icons

<!-- 在 [iconfont] 上将图标添加到 `我的项目` ，进入项目，生成在线链接，选择 `Symbol` 。 -->

It is convenient for developers to call icons on [iconfont] or use custom SVG Symbols . _Refer to [iconfont.cn usage help](https://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code)._

<code src='../../src/icon/demos/svg-symbol.tsx' iframe=100 />

### Unified configuration

The priority of the component attribute is higher than the context configuration, and the class and style will be merged internally.

<!-- 如果字体大小不同会导致对不齐，影响演示效果（受 `vertical-align: -0.125em` 影响）。 -->

<code src='../../src/icon/demos/provider.tsx' />

## API

### Common API

All icons are built to support the following properties, as well as `span` property of the label.

| parameter | instruction | type | Defaults |
| --- | --- | --- | --- |
| svgProps | svg tag attributes | `SVGProps<SVGSVGElement>` | - |
| spin | Rotate animation | `boolean` | `false` |
| spinReverse | Reverse rotation animation, priority is higher than spin | `boolean` | `false` |

### Icon

`Icon` Components are mainly used to customize icons and use SVG Symbol. For specific usage, please refer to the above example.

`component` And `symbolId` you must only set up one of them.

| parameter | instruction   | type           | Defaults |
| --------- | ------------- | -------------- | -------- |
| component | svg component | `ReactElement` | -        |
| symbolId  | svg symbol id | `string`       | -        |

### IconProvider

Supports all common APIs to facilitate the unified configuration of global or local icons.

[official bootstrap icon library]: https://icons.getbootstrap.com/
[iconfont]: https://www.iconfont.cn/
[svg symbol]: https://css-tricks.com/svg-symbol-good-choice-icons/

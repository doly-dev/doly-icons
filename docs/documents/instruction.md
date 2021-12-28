---
order: 1
---

# 使用说明

图标是基于 [Bootstrap 官方图标库] 进行 React 组件封装，方便设计师和开发者使用（[图标库](/icons)中快速查找）。

> 目前使用 v1.7.2，超过 1500 个图标，你可以在 UI 库或项目中使用。

安装

```bash
npm install doly-icons --save
# or
yarn add doly-icons
```

然后直接引入你需要的图标：

```typescript
import { Gear, HeartFill } from 'doly-icons';
```

目前主流的构建工具都支持 [Tree Sharking](https://webpack.js.org/guides/tree-shaking/) 技术，无需担心构建后的包大小。

除了内置的 Bootstrap 图标外，还支持自定义图标和 [SVG Symbol] ，具体请查看下面示例。

## 代码演示

### 基础用法

通过设置 `fontSize` `color` 样式可以改变图标的尺寸和颜色。

<code src='../../src/icon/demos/basic.tsx' />

### 自定义图标

建议颜色使用 `currentColor`， 宽高设为 `1em` ，方便根据业务场景调整。

<code src='../../src/icon/demos/define.tsx' />

### 使用 SVG Symbol 图标

<!-- 在 [iconfont] 上将图标添加到 `我的项目` ，进入项目，生成在线链接，选择 `Symbol` 。 -->

方便开发者调用在 [iconfont] 上的图标 或者 使用自定义的 [SVG Symbol] 。_参考 [iconfont.cn 使用帮助](http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.15&helptype=code)。_

<code src='../../src/icon/demos/svg-symbol.tsx' iframe=100 />

### 统一配置

组件属性优先级高于上下文配置，内部会将 class 和 style 进行合并。

<!-- 如果字体大小不同会导致对不齐，影响演示效果（受 `vertical-align: -0.125em` 影响）。 -->

<code src='../../src/icon/demos/provider.tsx' />

## API

### 共同的 API

全部内置图标都支持以下属性，还有 `span` 标签的属性。

| 参数        | 说明                           | 类型                      | 默认值  |
| ----------- | ------------------------------ | ------------------------- | ------- |
| svgProps    | svg 标签属性                   | `SVGProps<SVGSVGElement>` | -       |
| spin        | 旋转动画                       | `boolean`                 | `false` |
| spinReverse | 反向旋转动画，优先级比 spin 高 | `boolean`                 | `false` |

### Icon

`Icon` 组件主要用于自定义图标和使用 SVG Symbol ，具体用法请参照上面示例。

`component` 和 `symbolId` 必须且只能设置其中一项。

| 参数      | 说明          | 类型           | 默认值 |
| --------- | ------------- | -------------- | ------ |
| component | svg 组件      | `ReactElement` | -      |
| symbolId  | svg symbol id | `string`       | -      |

### IconProvider

支持所有共同的 API ，方便对全局或局部的图标进行统一配置。

[bootstrap 官方图标库]: https://icons.getbootstrap.com/
[iconfont]: https://www.iconfont.cn/
[svg symbol]: https://css-tricks.com/svg-symbol-good-choice-icons/

# doly-icons

中文 | [English](./README.en-US.md)

[![npm][npm]][npm-url] ![GitHub]

基于 [Bootstrap Icons] 的 React 图标组件。了解更多信息，请[点击查阅文档](https://doly-dev.github.io/doly-icons/latest/)。

## 安装

```bash
npm install doly-icons
# or
yarn add doly-icons
# or
pnpm add doly-icons
```

## 使用

> [查看代码演示](https://doly-dev.github.io/doly-icons/latest/documents#代码演示)

支持以下方式：

1. [使用 Bootstrap 图标](https://doly-dev.github.io/doly-icons/latest/icons)

```typescript
import { Gear HeartFill } from 'doly-icons'

export default ()=>(
  <>
    <Gear spin />
    <HeartFill />
  </>
)
```

2. 自定义图标

```typescript
import Icon from 'doly-icons';

const PuzzleSVG = (
  <svg
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    width="1em"
    height="1em"
  >
    <path d="M516.757333 149.333333a120.896 120.896 0 0 1 114.005334 161.173334h104.064a64 64 0 0 1 64 64V810.666667a64 64 0 0 1-64 64H298.666667a64 64 0 0 1-64-64v-87.104c0-15.701333 11.989333-28.629333 27.306666-30.08l2.922667-0.149334a90.666667 90.666667 0 0 0 4.394667-181.226666L264.896 512a30.229333 30.229333 0 0 1-30.08-27.306667L234.666667 481.749333v-107.242666a64 64 0 0 1 64-64h104.064a120.704 120.704 0 0 1-6.869334-40.32C395.861333 184.746667 431.274667 149.333333 516.757333 149.333333z m0 64a56.896 56.896 0 0 0-53.674666 75.861334l30.144 85.312H298.666667v77.184a154.730667 154.730667 0 0 1 5.162666 300.693333l-5.162666 1.258667V810.666667h436.16V374.528l-194.56-0.021333 30.144-85.333334A56.896 56.896 0 0 0 516.736 213.333333z" />
  </svg>
);

export default () => <Icon component={PuzzleSVG} />;
```

3. SVG Symbol

```typescript
import { Helmet } from 'react-helmet';
import Icon from 'doly-icons';

export default () => (
  <>
    <Helmet>
      {/* 建议下载到项目中使用。如果一定要引入在线地址，建议在页面入口引入，避免重复加载。 */}
      <script src="//at.alicdn.com/t/font_3061930_ney4a0jv5ul.js" type="text/javascript" />
    </Helmet>
    <Icon symbolId="loading" spin />
    <Icon symbolId="viewgallery" />
    <Icon symbolId="viewlist" />
  </>
);
```

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

`renderSVG` 和 `symbolId` 必须且只能设置其中一项。

| 参数      | 说明            | 类型                                        | 默认值 |
| --------- | --------------- | ------------------------------------------- | ------ |
| renderSVG | 自定义 svg 组件 | `(mergeSVGProps: SVGProps) => ReactElement` | -      |
| symbolId  | svg symbol id   | `string`                                    | -      |

### IconProvider

除了以下参数外，支持所有共同的 API ，方便对全局或局部的图标进行统一配置。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| csp | [内容安全政策](https://developers.google.com/web/fundamentals/security/csp/)，用于添加 [nonce](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/nonce) 到内联的 style 元素，一般情况下不用设置。 | `{ nonce?:string; }` | - |

### CSS 变量

| 变量名                    | 说明         | 默认值         |
| ------------------------- | ------------ | -------------- |
| --doly-icon-font-size     | 图标大小     | `1em`          |
| --doly-icon-color         | 图标颜色     | `currentColor` |
| --doly-icon-spin-duration | 旋转动画时长 | `1s`           |

[bootstrap icons]: https://icons.getbootstrap.com/
[npm]: https://img.shields.io/npm/v/doly-icons.svg
[npm-url]: https://npmjs.com/package/doly-icons
[github]: https://img.shields.io/github/license/doly-dev/doly-icons.svg

# doly-icons

[中文](./README.md) | English

[![npm][npm]][npm-url] ![GitHub]

React icon component based on [Bootstrap Icons]. For more information, please [click Consult documentation](https://doly-dev.github.io/doly-icons/latest/).

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

## Use

> [View code demo](https://doly-dev.github.io/doly-icons/latest/documents#code-demo)

The following methods are supported:

1. [Use the Bootstrap icon](https://doly-dev.github.io/doly-icons/latest/icons)

```typescript
import { Gear HeartFill } from 'doly-icons'

export default ()=>(
  <>
    <Gear spin />
    <HeartFill />
  </>
)
```

2. Custom icon

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
      {/* It is recommended to download to the project for use. If you must introduce an online address, it is recommended to introduce it at the page entrance to avoid repeated loading. */}
      <script src="//at.alicdn.com/t/font_3061930_ney4a0jv5ul.js" type="text/javascript" />
    </Helmet>
    <Icon symbolId="loading" spin />
    <Icon symbolId="viewgallery" />
    <Icon symbolId="viewlist" />
  </>
);
```

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

`renderSVG` And `symbolId` you must only set up one of them.

| parameter | instruction          | type                                        | Defaults |
| --------- | -------------------- | ------------------------------------------- | -------- |
| renderSVG | custom svg component | `(mergeSVGProps: SVGProps) => ReactElement` | -        |
| symbolId  | svg symbol id        | `string`                                    | -        |

### IconProvider

In addition to the following parameters, all common APIs are supported to facilitate unified configuration of global or local icons.

| parameter | instruction | type | Defaults |
| --- | --- | --- | --- |
| csp | [Content security policy](https://developers.google.com/web/fundamentals/security/csp/) , used to add [nonce](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/nonce) to inline style elements, generally do not need to be set. | `{nonce?:string}` | - |

### CSS variables

| variable name             | instruction                 | Defaults       |
| ------------------------- | --------------------------- | -------------- |
| --doly-icon-font-size     | Icon size                   | `1em`          |
| --doly-icon-color         | Icon color                  | `currentColor` |
| --doly-icon-spin-duration | Rotation animation duration | `1s`           |

[bootstrap icons]: https://icons.getbootstrap.com/
[npm]: https://img.shields.io/npm/v/doly-icons.svg
[npm-url]: https://npmjs.com/package/doly-icons
[github]: https://img.shields.io/github/license/doly-dev/doly-icons.svg

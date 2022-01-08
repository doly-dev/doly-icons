import * as React from 'react';
import {
  Gear,
  HeartFill,
  EmojiSmileFill,
  ArrowRepeat,
  ArrowClockwise,
  ArrowCounterclockwise,
  Search,
  YinYang,
} from 'doly-icons';
import IconLoading from './components/IconLoading';
import styles from './demo.less';

// 建议使用 CSS 变量项目中全局设置 react 的 CSSProperties 类型
// ref: https://stackoverflow.com/questions/52005083/how-to-define-css-variables-in-style-attribute-in-react-and-typescript
declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number;
  }
}

const Demo = () => (
  <>
    <div
      className={styles.iconList}
      style={{ '--doly-icon-font-size': '16px', '--doly-icon-color': '#2196f3' }}
    >
      <Gear />
      <EmojiSmileFill />
      <Search />
      <HeartFill style={{ '--doly-icon-color': '#e91e63' }} />
    </div>
    <div className={styles.iconList} style={{ '--doly-icon-spin-duration': '2s' }}>
      <YinYang spin />
      <ArrowRepeat spin />
      <ArrowClockwise spin />
      <ArrowCounterclockwise spinReverse />
      <ArrowCounterclockwise spinReverse style={{ '--doly-icon-spin-duration': '0.3s' }} />
      <IconLoading spin />
      <IconLoading spin style={{ '--doly-icon-spin-duration': '0.5s' }} />
    </div>
  </>
);

export default Demo;

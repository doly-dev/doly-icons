import React from 'react';
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
import styles from './demo.module.less';

const Demo = () => (
  <>
    <div
      className={styles.iconList}
      style={
        { '--doly-icon-font-size': '16px', '--doly-icon-color': '#2196f3' } as React.CSSProperties
      }
    >
      <Gear />
      <EmojiSmileFill />
      <Search />
      <HeartFill style={{ '--doly-icon-color': '#e91e63' }} />
    </div>
    <div
      className={styles.iconList}
      style={{ '--doly-icon-spin-duration': '2s' } as React.CSSProperties}
    >
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

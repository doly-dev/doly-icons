import * as React from 'react';
import { StarFill, MoonFill, SunFill } from 'doly-icons';
import styles from './demo.less';

const Demo: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
  return (
    <div className={styles.demo}>
      <h4>{title || '测试页面'}</h4>
      <div className={styles.iconList}>
        <StarFill />
        <MoonFill />
        <SunFill style={{ color: 'gold' }} />
      </div>
    </div>
  );
};

export default Demo;

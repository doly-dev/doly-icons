import * as React from 'react';
import { StarFill, MoonFill, SunFill } from 'doly-icons';
import styles from './provider.less';

const Demo: React.FC<{ title?: React.ReactNode }> = ({ title }) => {
  return (
    <>
      <h3>{title || '测试页面'}</h3>
      <div className={styles.iconList}>
        <StarFill />
        <MoonFill />
        <SunFill style={{ color: 'gold' }} />
      </div>
    </>
  );
};

export default Demo;

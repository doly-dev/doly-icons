import * as React from 'react';
import IconEmail from './components/IconEmail';
import IconHome from './components/IconHome';
import IconLoading from './components/IconLoading';
import IconPuzzle from './components/IconPuzzle';
import styles from './demo.module.less';

const Demo = () => {
  return (
    <div className={styles.iconList}>
      <IconEmail style={{ color: 'blue' }} />
      <IconPuzzle />
      <IconHome />
      <IconLoading spin style={{ fontSize: 16, color: 'red' }} />
      <IconLoading spin style={{ color: 'red' }} />
      <IconLoading spin />
    </div>
  );
};

export default Demo;

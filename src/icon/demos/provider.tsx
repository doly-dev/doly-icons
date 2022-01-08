import * as React from 'react';
import { IconProvider } from 'doly-icons';
import TestPage from './provider-test-page';
import styles from './provider.less';

const Demo = () => {
  return (
    <>
      <TestPage title="默认" />
      <IconProvider value={{ spin: true, style: { fontSize: 16, color: 'blue' } }}>
        <TestPage title="大小颜色旋转" />
      </IconProvider>
      <IconProvider value={{ className: styles.iconButton }}>
        <TestPage title="class" />
      </IconProvider>
    </>
  );
};

export default Demo;

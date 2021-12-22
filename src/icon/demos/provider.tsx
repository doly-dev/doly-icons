import * as React from 'react';
import { IconProvider } from 'doly-icons';
import BasicDemo from './basic';

const Demo = () => {
  return (
    <IconProvider value={{ style: { color: 'gray' } }}>
      <BasicDemo />
    </IconProvider>
  );
};

export default Demo;

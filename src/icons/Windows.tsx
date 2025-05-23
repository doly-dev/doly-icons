import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Windows: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="windows"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.555 1.375 0 2.237v5.45h6.555zM0 13.795l6.555.933V8.313H0zm7.278-5.4.026 6.378L16 16V8.395zM16 0 7.33 1.244v6.414H16z"/>
</svg>
      )}
    />
  );

export default Windows;

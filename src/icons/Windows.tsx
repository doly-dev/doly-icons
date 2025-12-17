import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![windows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41NTUgMS4zNzUgMCAyLjIzN3Y1LjQ1aDYuNTU1ek0wIDEzLjc5NWw2LjU1NS45MzNWOC4zMTNIMHptNy4yNzgtNS40LjAyNiA2LjM3OEwxNiAxNlY4LjM5NXpNMTYgMCA3LjMzIDEuMjQ0djYuNDE0SDE2eiIvPgo8L3N2Zz4=)*/
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

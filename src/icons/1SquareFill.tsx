import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![1-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptNy4yODMgNC4wMDJWMTJINy45NzFWNS4zMzhoLS4wNjVMNi4wNzIgNi42NTZWNS4zODVsMS44OTktMS4zODN6Ii8+Cjwvc3ZnPg==)*/
const Icon1SquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="1-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
</svg>
      )}
    />
  );

export default Icon1SquareFill;

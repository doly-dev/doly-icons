import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![1-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4yODMgNC4wMDJWMTJINy45NzFWNS4zMzhoLS4wNjVMNi4wNzIgNi42NTZWNS4zODVsMS44OTktMS4zODN6Ii8+CiAgPHBhdGggZD0iTTAgMmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTE1IDBhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xeiIvPgo8L3N2Zz4=)*/
const Icon1Square: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="1-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default Icon1Square;

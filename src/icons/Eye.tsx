import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![eye](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOHMtMy01LjUtOC01LjVTMCA4IDAgOHMzIDUuNSA4IDUuNVMxNiA4IDE2IDhNMS4xNzMgOGExMyAxMyAwIDAgMSAxLjY2LTIuMDQzQzQuMTIgNC42NjggNS44OCAzLjUgOCAzLjVzMy44NzkgMS4xNjggNS4xNjggMi40NTdBMTMgMTMgMCAwIDEgMTQuODI4IDhxLS4wODYuMTMtLjE5NS4yODhjLS4zMzUuNDgtLjgzIDEuMTItMS40NjUgMS43NTVDMTEuODc5IDExLjMzMiAxMC4xMTkgMTIuNSA4IDEyLjVzLTMuODc5LTEuMTY4LTUuMTY4LTIuNDU3QTEzIDEzIDAgMCAxIDEuMTcyIDh6Ii8+CiAgPHBhdGggZD0iTTggNS41YTIuNSAyLjUgMCAxIDAgMCA1IDIuNSAyLjUgMCAwIDAgMC01TTQuNSA4YTMuNSAzLjUgMCAxIDEgNyAwIDMuNSAzLjUgMCAwIDEtNyAwIi8+Cjwvc3ZnPg==)*/
const Eye: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="eye"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
</svg>
      )}
    />
  );

export default Eye;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![peace](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41IDEuMDE4YTcgNyAwIDAgMC00Ljc5IDExLjU2Nkw3LjUgNy43OTN6bTEgMHY2Ljc3NWw0Ljc5IDQuNzlBNyA3IDAgMCAwIDguNSAxLjAxOG00LjA4NCAxMi4yNzNMOC41IDkuMjA3djUuNzc1YTYuOTcgNi45NyAwIDAgMCA0LjA4NC0xLjY5MU03LjUgMTQuOTgyVjkuMjA3bC00LjA4NCA0LjA4NEE2Ljk3IDYuOTcgMCAwIDAgNy41IDE0Ljk4Mk0wIDhhOCA4IDAgMSAxIDE2IDBBOCA4IDAgMCAxIDAgOCIvPgo8L3N2Zz4=)*/
const Peace: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="peace"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0v6.775l4.79 4.79A7 7 0 0 0 8.5 1.018m4.084 12.273L8.5 9.207v5.775a6.97 6.97 0 0 0 4.084-1.691M7.5 14.982V9.207l-4.084 4.084A6.97 6.97 0 0 0 7.5 14.982M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
</svg>
      )}
    />
  );

export default Peace;

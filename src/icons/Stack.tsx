import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stack](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMTQuMTIgMTAuMTYzIDEuNzE1Ljg1OGMuMjIuMTEuMjIuNDI0IDAgLjUzNEw4LjI2NyAxNS4zNGEuNi42IDAgMCAxLS41MzQgMEwuMTY1IDExLjU1NWEuMjk5LjI5OSAwIDAgMSAwLS41MzRsMS43MTYtLjg1OCA1LjMxNyAyLjY1OWMuNTA1LjI1MiAxLjEuMjUyIDEuNjA0IDBsNS4zMTctMi42NnpNNy43MzMuMDYzYS42LjYgMCAwIDEgLjUzNCAwbDcuNTY4IDMuNzg0YS4zLjMgMCAwIDEgMCAuNTM1TDguMjY3IDguMTY1YS42LjYgMCAwIDEtLjUzNCAwTC4xNjUgNC4zODJhLjI5OS4yOTkgMCAwIDEgMC0uNTM1eiIvPgogIDxwYXRoIGQ9Im0xNC4xMiA2LjU3NiAxLjcxNS44NThjLjIyLjExLjIyLjQyNCAwIC41MzRsLTcuNTY4IDMuNzg0YS42LjYgMCAwIDEtLjUzNCAwTC4xNjUgNy45NjhhLjI5OS4yOTkgMCAwIDEgMC0uNTM0bDEuNzE2LS44NTggNS4zMTcgMi42NTljLjUwNS4yNTIgMS4xLjI1MiAxLjYwNCAweiIvPgo8L3N2Zz4=)*/
const Stack: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stack"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.6.6 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.6.6 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.6.6 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535z"/>
  <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.6.6 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0z"/>
</svg>
      )}
    />
  );

export default Stack;

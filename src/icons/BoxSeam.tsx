import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-seam](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4xODYgMS4xMTNhLjUuNSAwIDAgMC0uMzcyIDBMMS44NDYgMy41bDIuNDA0Ljk2MUwxMC40MDQgMnptMy41NjQgMS40MjZMNS41OTYgNSA4IDUuOTYxIDE0LjE1NCAzLjV6bTMuMjUgMS43LTYuNSAyLjZ2Ny45MjJsNi41LTIuNlY0LjI0ek03LjUgMTQuNzYyVjYuODM4TDEgNC4yMzl2Ny45MjN6TTcuNDQzLjE4NGExLjUgMS41IDAgMCAxIDEuMTE0IDBsNy4xMjkgMi44NTJBLjUuNSAwIDAgMSAxNiAzLjV2OC42NjJhMSAxIDAgMCAxLS42MjkuOTI4bC03LjE4NSAyLjg3NGEuNS41IDAgMCAxLS4zNzIgMEwuNjMgMTMuMDlhMSAxIDAgMCAxLS42My0uOTI4VjMuNWEuNS41IDAgMCAxIC4zMTQtLjQ2NHoiLz4KPC9zdmc+)*/
const BoxSeam: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-seam"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
</svg>
      )}
    />
  );

export default BoxSeam;

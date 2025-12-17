import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![folder2-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAzLjVBMS41IDEuNSAwIDAgMSAyLjUgMmgyLjc2NGMuOTU4IDAgMS43Ni41NiAyLjMxMSAxLjE4NEM3Ljk4NSAzLjY0OCA4LjQ4IDQgOSA0aDQuNUExLjUgMS41IDAgMCAxIDE1IDUuNXYuNjRjLjU3LjI2NS45NC44NzYuODU2IDEuNTQ2bC0uNjQgNS4xMjRBMi41IDIuNSAwIDAgMSAxMi43MzMgMTVIMy4yNjZhMi41IDIuNSAwIDAgMS0yLjQ4MS0yLjE5bC0uNjQtNS4xMjRBMS41IDEuNSAwIDAgMSAxIDYuMTR6TTIgNmgxMnYtLjVhLjUuNSAwIDAgMC0uNS0uNUg5Yy0uOTY0IDAtMS43MS0uNjI5LTIuMTc0LTEuMTU0QzYuMzc0IDMuMzM0IDUuODIgMyA1LjI2NCAzSDIuNWEuNS41IDAgMCAwLS41LjV6bS0uMzY3IDFhLjUuNSAwIDAgMC0uNDk2LjU2MmwuNjQgNS4xMjRBMS41IDEuNSAwIDAgMCAzLjI2NiAxNGg5LjQ2OGExLjUgMS41IDAgMCAwIDEuNDg5LTEuMzE0bC42NC01LjEyNEEuNS41IDAgMCAwIDE0LjM2NyA3eiIvPgo8L3N2Zz4=)*/
const Folder2Open: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="folder2-open"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/>
</svg>
      )}
    />
  );

export default Folder2Open;

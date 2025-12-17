import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![x-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy45ODcgMTZhMS41MyAxLjUzIDAgMCAxLTEuMDctLjQ0OEwuNDUgOS4wODJhMS41MyAxLjUzIDAgMCAxIDAtMi4xNjVMNi45MTcuNDVhMS41MyAxLjUzIDAgMCAxIDIuMTY2IDBsNi40NjkgNi40NjhBMS41MyAxLjUzIDAgMCAxIDE2IDguMDEzYTEuNTMgMS41MyAwIDAgMS0uNDQ4IDEuMDdsLTYuNDcgNi40NjlBMS41MyAxLjUzIDAgMCAxIDcuOTg4IDE2ek03LjYzOSAxLjE3IDQuNzY2IDQuMDQ0IDggNy4yNzhsMy4yMzQtMy4yMzRMOC4zNjEgMS4xN2EuNTEuNTEgMCAwIDAtLjcyMiAwTTguNzIyIDhsMy4yMzQgMy4yMzQgMi44NzMtMi44NzNjLjItLjIuMi0uNTIzIDAtLjcyMmwtMi44NzMtMi44NzN6TTggOC43MjJsLTMuMjM0IDMuMjM0IDIuODczIDIuODczYy4yLjIuNTIzLjIuNzIyIDBsMi44NzMtMi44NzN6TTcuMjc4IDggNC4wNDQgNC43NjYgMS4xNyA3LjYzOWEuNTEuNTEgMCAwIDAgMCAuNzIybDIuODc0IDIuODczeiIvPgo8L3N2Zz4=)*/
const XDiamond: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="x-diamond"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.987 16a1.53 1.53 0 0 1-1.07-.448L.45 9.082a1.53 1.53 0 0 1 0-2.165L6.917.45a1.53 1.53 0 0 1 2.166 0l6.469 6.468A1.53 1.53 0 0 1 16 8.013a1.53 1.53 0 0 1-.448 1.07l-6.47 6.469A1.53 1.53 0 0 1 7.988 16zM7.639 1.17 4.766 4.044 8 7.278l3.234-3.234L8.361 1.17a.51.51 0 0 0-.722 0M8.722 8l3.234 3.234 2.873-2.873c.2-.2.2-.523 0-.722l-2.873-2.873zM8 8.722l-3.234 3.234 2.873 2.873c.2.2.523.2.722 0l2.873-2.873zM7.278 8 4.044 4.766 1.17 7.639a.51.51 0 0 0 0 .722l2.874 2.873z"/>
</svg>
      )}
    />
  );

export default XDiamond;

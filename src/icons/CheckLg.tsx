import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check-lg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNzM2IDMuOTdhLjczMy43MzMgMCAwIDEgMS4wNDcgMGMuMjg2LjI4OS4yOS43NTYuMDEgMS4wNUw3Ljg4IDEyLjAxYS43MzMuNzMzIDAgMCAxLTEuMDY1LjAyTDMuMjE3IDguMzg0YS43NTcuNzU3IDAgMCAxIDAtMS4wNi43MzMuNzMzIDAgMCAxIDEuMDQ3IDBsMy4wNTIgMy4wOTMgNS40LTYuNDI1eiIvPgo8L3N2Zz4=)*/
const CheckLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
</svg>
      )}
    />
  );

export default CheckLg;

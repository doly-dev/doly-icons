import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suit-diamond-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi40NSA3LjQgNy4yIDEuMDY3YTEgMSAwIDAgMSAxLjYgMEwxMy41NSA3LjRhMSAxIDAgMCAxIDAgMS4yTDguOCAxNC45MzNhMSAxIDAgMCAxLTEuNiAwTDIuNDUgOC42YTEgMSAwIDAgMSAwLTEuMiIvPgo8L3N2Zz4=)*/
const SuitDiamondFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suit-diamond-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
</svg>
      )}
    />
  );

export default SuitDiamondFill;

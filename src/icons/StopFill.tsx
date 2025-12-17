import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stop-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAzLjVoNkExLjUgMS41IDAgMCAxIDEyLjUgNXY2YTEuNSAxLjUgMCAwIDEtMS41IDEuNUg1QTEuNSAxLjUgMCAwIDEgMy41IDExVjVBMS41IDEuNSAwIDAgMSA1IDMuNSIvPgo8L3N2Zz4=)*/
const StopFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stop-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>
</svg>
      )}
    />
  );

export default StopFill;

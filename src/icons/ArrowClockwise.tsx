import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-clockwise](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDNhNSA1IDAgMSAwIDQuNTQ2IDIuOTE0LjUuNSAwIDAgMSAuOTA4LS40MTdBNiA2IDAgMSAxIDggMnoiLz4KICA8cGF0aCBkPSJNOCA0LjQ2NlYuNTM0YS4yNS4yNSAwIDAgMSAuNDEtLjE5MmwyLjM2IDEuOTY2Yy4xMi4xLjEyLjI4NCAwIC4zODRMOC40MSA0LjY1OEEuMjUuMjUgMCAwIDEgOCA0LjQ2NiIvPgo8L3N2Zz4=)*/
const ArrowClockwise: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-clockwise"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/>
</svg>
      )}
    />
  );

export default ArrowClockwise;

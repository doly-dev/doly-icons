import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bucket-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41MjIgNUgyYS41LjUgMCAwIDAtLjQ5NC41NzRsMS4zNzIgOS4xNDlBMS41IDEuNSAwIDAgMCA0LjM2IDE2aDcuMjc4YTEuNSAxLjUgMCAwIDAgMS40ODMtMS4yNzdsMS4zNzMtOS4xNDlBLjUuNSAwIDAgMCAxNCA1aC0uNTIyQTUuNSA1LjUgMCAwIDAgMi41MjIgNW0xLjAwNSAwYTQuNSA0LjUgMCAwIDEgOC45NDUgMHoiLz4KPC9zdmc+)*/
const BucketFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bucket-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.522 5H2a.5.5 0 0 0-.494.574l1.372 9.149A1.5 1.5 0 0 0 4.36 16h7.278a1.5 1.5 0 0 0 1.483-1.277l1.373-9.149A.5.5 0 0 0 14 5h-.522A5.5 5.5 0 0 0 2.522 5m1.005 0a4.5 4.5 0 0 1 8.945 0z"/>
</svg>
      )}
    />
  );

export default BucketFill;

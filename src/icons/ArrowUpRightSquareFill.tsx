import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-right-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMnpNNS45MDQgMTAuODAzIDEwIDYuNzA3djIuNzY4YS41LjUgMCAwIDAgMSAwVjUuNWEuNS41IDAgMCAwLS41LS41SDYuNTI1YS41LjUgMCAxIDAgMCAxaDIuNzY4bC00LjA5NiA0LjA5NmEuNS41IDAgMCAwIC43MDcuNzA3Ii8+Cjwvc3ZnPg==)*/
const ArrowUpRightSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-right-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707"/>
</svg>
      )}
    />
  );

export default ArrowUpRightSquareFill;

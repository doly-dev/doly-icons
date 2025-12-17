import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bounding-box-circles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMk0wIDJhMiAyIDAgMCAxIDMuOTM3LS41aDguMTI2QTIgMiAwIDEgMSAxNC41IDMuOTM3djguMTI2YTIgMiAwIDEgMS0yLjQzNyAyLjQzN0gzLjkzN0EyIDIgMCAxIDEgMS41IDEyLjA2M1YzLjkzN0EyIDIgMCAwIDEgMCAybTIuNSAxLjkzN3Y4LjEyNmMuNzAzLjE4IDEuMjU2LjczNCAxLjQzNyAxLjQzN2g4LjEyNmEyIDIgMCAwIDEgMS40MzctMS40MzdWMy45MzdBMiAyIDAgMCAxIDEyLjA2MyAyLjVIMy45MzdBMiAyIDAgMCAxIDIuNSAzLjkzN00xNCAxYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMk0yIDEzYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMm0xMiAwYTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMiIvPgo8L3N2Zz4=)*/
const BoundingBoxCircles: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bounding-box-circles"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
      )}
    />
  );

export default BoundingBoxCircles;

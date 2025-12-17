import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![camera-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuNSA4LjVhMi41IDIuNSAwIDEgMS01IDAgMi41IDIuNSAwIDAgMSA1IDAiLz4KICA8cGF0aCBkPSJNMiA0YTIgMiAwIDAgMC0yIDJ2NmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0yaC0xLjE3MmEyIDIgMCAwIDEtMS40MTQtLjU4NmwtLjgyOC0uODI4QTIgMiAwIDAgMCA5LjE3MiAySDYuODI4YTIgMiAwIDAgMC0xLjQxNC41ODZsLS44MjguODI4QTIgMiAwIDAgMSAzLjE3MiA0em0uNSAyYS41LjUgMCAxIDEgMC0xIC41LjUgMCAwIDEgMCAxbTkgMi41YTMuNSAzLjUgMCAxIDEtNyAwIDMuNSAzLjUgMCAwIDEgNyAwIi8+Cjwvc3ZnPg==)*/
const CameraFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="camera-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
</svg>
      )}
    />
  );

export default CameraFill;

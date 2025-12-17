import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bootstrap-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4zNzUgNy4xMjVWNC42NThoMS43OGMuOTczIDAgMS41NDIuNDU3IDEuNTQyIDEuMjM3IDAgLjgwMi0uNjA0IDEuMjMtMS43NjQgMS4yM3ptMCAzLjc2MmgxLjg5OGMxLjE4NCAwIDEuODEtLjQ4IDEuODEtMS4zNzcgMC0uODg1LS42NS0xLjM0OC0xLjg4Ni0xLjM0OEg2LjM3NXoiLz4KICA8cGF0aCBkPSJNNC4wMDIgMGE0IDQgMCAwIDAtNCA0djhhNCA0IDAgMCAwIDQgNGg4YTQgNCAwIDAgMCA0LTRWNGE0IDQgMCAwIDAtNC00em0xLjA2IDEyVjMuNTQ1aDMuMzk5YzEuNTg3IDAgMi41NDMuODA5IDIuNTQzIDIuMTEgMCAuODg0LS42NSAxLjY3NS0xLjQ4MyAxLjgxNnYuMWMxLjE0My4xMTcgMS45MDQuOTMxIDEuOTA0IDIuMDMzIDAgMS40ODgtMS4wODQgMi4zOTYtMi44ODggMi4zOTZ6Ii8+Cjwvc3ZnPg==)*/
const BootstrapFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bootstrap-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375z"/>
  <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396z"/>
</svg>
      )}
    />
  );

export default BootstrapFill;

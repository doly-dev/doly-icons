import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![flask](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC41IDBhLjUuNSAwIDAgMCAwIDFINXY1LjM2TC41MDMgMTMuNzE3QTEuNSAxLjUgMCAwIDAgMS43ODMgMTZoMTIuNDM0YTEuNSAxLjUgMCAwIDAgMS4yOC0yLjI4MkwxMSA2LjM1OVYxaC41YS41LjUgMCAwIDAgMC0xek0xMCAySDlhLjUuNSAwIDAgMCAwIDFoMXYxSDlhLjUuNSAwIDAgMCAwIDFoMXYxSDlhLjUuNSAwIDAgMCAwIDFoMS4yMmwuNjEgMUgxMGEuNS41IDAgMSAwIDAgMWgxLjQ0MmwuNjExIDFIMTFhLjUuNSAwIDEgMCAwIDFoMS42NjRsLjYxMSAxSDEyYS41LjUgMCAxIDAgMCAxaDEuODg2bC43NTggMS4yNGEuNS41IDAgMCAxLS40MjcuNzZIMS43ODNhLjUuNSAwIDAgMS0uNDI3LS43Nmw0LjU3LTcuNDhBLjUuNSAwIDAgMCA2IDYuNVYxaDR6Ii8+Cjwvc3ZnPg==)*/
const Flask: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="flask"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.5 0a.5.5 0 0 0 0 1H5v5.36L.503 13.717A1.5 1.5 0 0 0 1.783 16h12.434a1.5 1.5 0 0 0 1.28-2.282L11 6.359V1h.5a.5.5 0 0 0 0-1zM10 2H9a.5.5 0 0 0 0 1h1v1H9a.5.5 0 0 0 0 1h1v1H9a.5.5 0 0 0 0 1h1.22l.61 1H10a.5.5 0 1 0 0 1h1.442l.611 1H11a.5.5 0 1 0 0 1h1.664l.611 1H12a.5.5 0 1 0 0 1h1.886l.758 1.24a.5.5 0 0 1-.427.76H1.783a.5.5 0 0 1-.427-.76l4.57-7.48A.5.5 0 0 0 6 6.5V1h4z"/>
</svg>
      )}
    />
  );

export default Flask;

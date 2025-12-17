import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![geo-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuMTY2IDguOTRjLS41MjQgMS4wNjItMS4yMzQgMi4xMi0xLjk2IDMuMDdBMzIgMzIgMCAwIDEgOCAxNC41OGEzMiAzMiAwIDAgMS0yLjIwNi0yLjU3Yy0uNzI2LS45NS0xLjQzNi0yLjAwOC0xLjk2LTMuMDdDMy4zMDQgNy44NjcgMyA2Ljg2MiAzIDZhNSA1IDAgMCAxIDEwIDBjMCAuODYyLS4zMDUgMS44NjctLjgzNCAyLjk0TTggMTZzNi01LjY4NiA2LTEwQTYgNiAwIDAgMCAyIDZjMCA0LjMxNCA2IDEwIDYgMTAiLz4KICA8cGF0aCBkPSJNOCA4YTIgMiAwIDEgMSAwLTQgMiAyIDAgMCAxIDAgNG0wIDFhMyAzIDAgMSAwIDAtNiAzIDMgMCAwIDAgMCA2Ii8+Cjwvc3ZnPg==)*/
const GeoAlt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="geo-alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
      )}
    />
  );

export default GeoAlt;

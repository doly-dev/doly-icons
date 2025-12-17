import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![modem](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDEuNUExLjUgMS41IDAgMCAxIDcgMGgyYTEuNSAxLjUgMCAwIDEgMS41IDEuNXYxMWExLjUgMS41IDAgMCAxLTEuNDA0IDEuNDk3Yy4zNS4zMDUuODcyLjY3OCAxLjYyOCAxLjA1NkEuNS41IDAgMCAxIDEwLjUgMTZoLTVhLjUuNSAwIDAgMS0uMjI0LS45NDdjLjc1Ni0uMzc4IDEuMjc3LS43NSAxLjYyOC0xLjA1NkExLjUgMS41IDAgMCAxIDUuNSAxMi41ek03IDFhLjUuNSAwIDAgMC0uNS41djExYS41LjUgMCAwIDAgLjUuNWgyYS41LjUgMCAwIDAgLjUtLjV2LTExQS41LjUgMCAwIDAgOSAxeiIvPgogIDxwYXRoIGQ9Ik04LjUgMi41YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwbTAgMmEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0wIDJhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtMCAyYS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwIi8+Cjwvc3ZnPg==)*/
const Modem: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="modem"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 1.5A1.5 1.5 0 0 1 7 0h2a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.404 1.497c.35.305.872.678 1.628 1.056A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.224-.947c.756-.378 1.277-.75 1.628-1.056A1.5 1.5 0 0 1 5.5 12.5zM7 1a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 9 1z"/>
  <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default Modem;

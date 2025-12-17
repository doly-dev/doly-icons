import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjUgMTBhLjUuNSAwIDAgMS0uNS0uNXYtOGEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAuNS41djhhLjUuNSAwIDAgMS0uNS41aC0yYS41LjUgMCAwIDAgMCAxaDJBMS41IDEuNSAwIDAgMCAxNCA5LjV2LThBMS41IDEuNSAwIDAgMCAxMi41IDBoLTlBMS41IDEuNSAwIDAgMCAyIDEuNXY4QTEuNSAxLjUgMCAwIDAgMy41IDExaDJhLjUuNSAwIDAgMCAwLTF6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42NDYgMTUuODU0YS41LjUgMCAwIDAgLjcwOCAwbDMtM2EuNS41IDAgMCAwLS43MDgtLjcwOEw4LjUgMTQuMjkzVjUuNWEuNS41IDAgMCAwLTEgMHY4Ljc5M2wtMi4xNDYtMi4xNDdhLjUuNSAwIDAgMC0uNzA4LjcwOHoiLz4KPC9zdmc+)*/
const BoxArrowDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.5 10a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 0 0 1h2A1.5 1.5 0 0 0 14 9.5v-8A1.5 1.5 0 0 0 12.5 0h-9A1.5 1.5 0 0 0 2 1.5v8A1.5 1.5 0 0 0 3.5 11h2a.5.5 0 0 0 0-1z"/>
  <path fillRule="evenodd" d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708z"/>
</svg>
      )}
    />
  );

export default BoxArrowDown;

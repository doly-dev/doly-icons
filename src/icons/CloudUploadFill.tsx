import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-upload-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBhNS41MyA1LjUzIDAgMCAwLTMuNTk0IDEuMzQyYy0uNzY2LjY2LTEuMzIxIDEuNTItMS40NjQgMi4zODNDMS4yNjYgNC4wOTUgMCA1LjU1NSAwIDcuMzE4IDAgOS4zNjYgMS43MDggMTEgMy43ODEgMTFINy41VjUuNzA3TDUuMzU0IDcuODU0YS41LjUgMCAxIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMGwzIDNhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgNS43MDdWMTFoNC4xODhDMTQuNTAyIDExIDE2IDkuNTcgMTYgNy43NzNjMC0xLjYzNi0xLjI0Mi0yLjk2OS0yLjgzNC0zLjE5NEMxMi45MjMgMS45OTkgMTAuNjkgMCA4IDBtLS41IDE0LjVWMTFoMXYzLjVhLjUuNSAwIDAgMS0xIDAiLz4KPC9zdmc+)*/
const CloudUploadFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-upload-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 4.095 0 5.555 0 7.318 0 9.366 1.708 11 3.781 11H7.5V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11h4.188C14.502 11 16 9.57 16 7.773c0-1.636-1.242-2.969-2.834-3.194C12.923 1.999 10.69 0 8 0m-.5 14.5V11h1v3.5a.5.5 0 0 1-1 0"/>
</svg>
      )}
    />
  );

export default CloudUploadFill;

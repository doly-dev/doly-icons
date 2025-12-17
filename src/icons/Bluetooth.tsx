import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bluetooth](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Im04LjU0MyAzLjk0OCAxLjMxNiAxLjMxNkw4LjU0MyA2LjU4em0wIDguMTA0IDEuMzE2LTEuMzE2TDguNTQzIDkuNDJ6bS0xLjQxLTQuMDQzTDQuMjc1IDUuMTMzbC44MjctLjgyN0w3LjM3NyA2LjU4VjEuMTI4bDQuMTM3IDQuMTM2TDguNzg3IDguMDFsMi43NDUgMi43NDUtNC4xMzYgNC4xMzdWOS40MmwtMi4yOTQgMi4yNzQtLjgyNy0uODI3ek03LjkwMyAxNmMzLjQ5OCAwIDUuOTA0LTEuNjU1IDUuOTA0LTguMDEgMC02LjMzNS0yLjQwNi03Ljk5LTUuOTAzLTcuOTlTMiAxLjY1NSAyIDguMDFDMiAxNC4zNDQgNC40MDcgMTYgNy45MDQgMTZaIi8+Cjwvc3ZnPg==)*/
const Bluetooth: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bluetooth"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58zm0 8.104 1.316-1.316L8.543 9.42zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827zM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99S2 1.655 2 8.01C2 14.344 4.407 16 7.904 16Z"/>
</svg>
      )}
    />
  );

export default Bluetooth;

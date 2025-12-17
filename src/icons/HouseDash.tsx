import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN00xMSAxMmgzYS41LjUgMCAwIDEgMCAxaC0zYS41LjUgMCAxIDEgMC0xIi8+CiAgPHBhdGggZD0iTTcuMjkzIDEuNWExIDEgMCAwIDEgMS40MTQgMEwxMSAzLjc5M1YyLjVhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXYzLjI5M2wyLjM1NCAyLjM1M2EuNS41IDAgMCAxLS43MDguNzA4TDggMi4yMDdsLTUgNVYxMy41YS41LjUgMCAwIDAgLjUuNWg0YS41LjUgMCAwIDEgMCAxaC00QTEuNSAxLjUgMCAwIDEgMiAxMy41VjguMjA3bC0uNjQ2LjY0N2EuNS41IDAgMSAxLS43MDgtLjcwOHoiLz4KPC9zdmc+)*/
const HouseDash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-dash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M11 12h3a.5.5 0 0 1 0 1h-3a.5.5 0 1 1 0-1"/>
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
</svg>
      )}
    />
  );

export default HouseDash;

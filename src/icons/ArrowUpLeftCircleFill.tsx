import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-left-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS01LjkwNCAyLjgwM2EuNS41IDAgMSAwIC43MDctLjcwN0w2LjcwNyA2aDIuNzY4YS41LjUgMCAxIDAgMC0xSDUuNWEuNS41IDAgMCAwLS41LjV2My45NzVhLjUuNSAwIDAgMCAxIDBWNi43MDd6Ii8+Cjwvc3ZnPg==)*/
const ArrowUpLeftCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-left-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707z"/>
</svg>
      )}
    />
  );

export default ArrowUpLeftCircleFill;

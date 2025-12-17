import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clock-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTggMy41YS41LjUgMCAwIDAtMSAwVjlhLjUuNSAwIDAgMCAuMjUyLjQzNGwzLjUgMmEuNS41IDAgMCAwIC40OTYtLjg2OEw4IDguNzF6Ii8+Cjwvc3ZnPg==)*/
const ClockFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clock-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg>
      )}
    />
  );

export default ClockFill;

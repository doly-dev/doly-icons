import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-forward-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTQuNzkgNS4wOTNBLjUuNSAwIDAgMCA0IDUuNXY1YS41LjUgMCAwIDAgLjc5LjQwN0w3LjUgOC45NzJWMTAuNWEuNS41IDAgMCAwIC43OS40MDdMMTEgOC45NzJWMTAuNWEuNS41IDAgMCAwIDEgMHYtNWEuNS41IDAgMCAwLTEgMHYxLjUyOEw4LjI5IDUuMDkzYS41LjUgMCAwIDAtLjc5LjQwN3YxLjUyOHoiLz4KPC9zdmc+)*/
const SkipForwardCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-forward-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528z"/>
</svg>
      )}
    />
  );

export default SkipForwardCircleFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-down-left-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxNmEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJ6bTguMDk2LTEwLjgwM0w2IDkuMjkzVjYuNTI1YS41LjUgMCAwIDAtMSAwVjEwLjVhLjUuNSAwIDAgMCAuNS41aDMuOTc1YS41LjUgMCAwIDAgMC0xSDYuNzA3bDQuMDk2LTQuMDk2YS41LjUgMCAxIDAtLjcwNy0uNzA3Ii8+Cjwvc3ZnPg==)*/
const ArrowDownLeftSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-left-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2zm8.096-10.803L6 9.293V6.525a.5.5 0 0 0-1 0V10.5a.5.5 0 0 0 .5.5h3.975a.5.5 0 0 0 0-1H6.707l4.096-4.096a.5.5 0 1 0-.707-.707"/>
</svg>
      )}
    />
  );

export default ArrowDownLeftSquareFill;

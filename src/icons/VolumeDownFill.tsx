import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![volume-down-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSA0YS41LjUgMCAwIDAtLjgxMi0uMzlMNS44MjUgNS41SDMuNUEuNS41IDAgMCAwIDMgNnY0YS41LjUgMCAwIDAgLjUuNWgyLjMyNWwyLjM2MyAxLjg5QS41LjUgMCAwIDAgOSAxMnptMy4wMjUgNGE0LjUgNC41IDAgMCAxLTEuMzE4IDMuMTgyTDEwIDEwLjQ3NUEzLjUgMy41IDAgMCAwIDExLjAyNSA4IDMuNSAzLjUgMCAwIDAgMTAgNS41MjVsLjcwNy0uNzA3QTQuNSA0LjUgMCAwIDEgMTIuMDI1IDgiLz4KPC9zdmc+)*/
const VolumeDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="volume-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12zm3.025 4a4.5 4.5 0 0 1-1.318 3.182L10 10.475A3.5 3.5 0 0 0 11.025 8 3.5 3.5 0 0 0 10 5.525l.707-.707A4.5 4.5 0 0 1 12.025 8"/>
</svg>
      )}
    />
  );

export default VolumeDownFill;

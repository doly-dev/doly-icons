import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![x-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTUuMzU0IDQuNjQ2YS41LjUgMCAxIDAtLjcwOC43MDhMNy4yOTMgOGwtMi42NDcgMi42NDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDguNzA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDguNzA3IDhsMi42NDctMi42NDZhLjUuNSAwIDAgMC0uNzA4LS43MDhMOCA3LjI5M3oiLz4KPC9zdmc+)*/
const XCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="x-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
</svg>
      )}
    />
  );

export default XCircleFill;

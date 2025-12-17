import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-lock-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDIuMjA3bDYuNjQ2IDYuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDEzIDUuNzkzVjIuNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M3oiLz4KICA8cGF0aCBkPSJtOCAzLjI5MyA0LjcyIDQuNzJhMyAzIDAgMCAwLTIuNzA5IDMuMjQ4QTIgMiAwIDAgMCA5IDEzdjJIMy41QTEuNSAxLjUgMCAwIDEgMiAxMy41VjkuMjkzeiIvPgogIDxwYXRoIGQ9Ik0xMyA5YTIgMiAwIDAgMC0yIDJ2MWExIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMWg0YTEgMSAwIDAgMCAxLTF2LTJhMSAxIDAgMCAwLTEtMXYtMWEyIDIgMCAwIDAtMi0ybTAgMWExIDEgMCAwIDEgMSAxdjFoLTJ2LTFhMSAxIDAgMCAxIDEtMSIvPgo8L3N2Zz4=)*/
const HouseLockFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-lock-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 4.72 4.72a3 3 0 0 0-2.709 3.248A2 2 0 0 0 9 13v2H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
  <path d="M13 9a2 2 0 0 0-2 2v1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1v-1a2 2 0 0 0-2-2m0 1a1 1 0 0 1 1 1v1h-2v-1a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default HouseLockFill;

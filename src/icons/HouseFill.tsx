import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDIuMjA3bDYuNjQ2IDYuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDEzIDUuNzkzVjIuNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M3oiLz4KICA8cGF0aCBkPSJtOCAzLjI5MyA2IDZWMTMuNWExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTlBMS41IDEuNSAwIDAgMSAyIDEzLjVWOS4yOTN6Ii8+Cjwvc3ZnPg==)*/
const HouseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z"/>
</svg>
      )}
    />
  );

export default HouseFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-exclamation-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDIuMjA3bDYuNjQ2IDYuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDEzIDUuNzkzVjIuNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M3oiLz4KICA8cGF0aCBkPSJtOCAzLjI5MyA0LjcxMiA0LjcxMkE0LjUgNC41IDAgMCAwIDguNzU4IDE1SDMuNUExLjUgMS41IDAgMCAxIDIgMTMuNVY5LjI5M3oiLz4KICA8cGF0aCBkPSJNMTYgMTIuNWEzLjUgMy41IDAgMSAxLTcgMCAzLjUgMy41IDAgMCAxIDcgMG0tMy41LTJhLjUuNSAwIDAgMC0uNS41djEuNWEuNS41IDAgMSAwIDEgMFYxMWEuNS41IDAgMCAwLS41LS41bTAgNGEuNS41IDAgMSAwIDAtMSAuNS41IDAgMCAwIDAgMSIvPgo8L3N2Zz4=)*/
const HouseExclamationFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-exclamation-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1.5a.5.5 0 1 0 1 0V11a.5.5 0 0 0-.5-.5m0 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>
      )}
    />
  );

export default HouseExclamationFill;

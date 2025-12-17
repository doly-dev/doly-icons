import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-x-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43MDcgMS41YTEgMSAwIDAgMC0xLjQxNCAwTC42NDYgOC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEw4IDIuMjA3bDYuNjQ2IDYuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4TDEzIDUuNzkzVjIuNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M3oiLz4KICA8cGF0aCBkPSJtOCAzLjI5MyA0LjcxMiA0LjcxMkE0LjUgNC41IDAgMCAwIDguNzU4IDE1SDMuNUExLjUgMS41IDAgMCAxIDIgMTMuNVY5LjI5M3oiLz4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20tLjY0Ni00Ljg1NC42NDYuNjQ3LjY0Ni0uNjQ2YS41LjUgMCAwIDEgLjcwOC43MDdsLS42NDcuNjQ2LjY0Ny42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtLjY0Ni0uNjQ3LS42NDYuNjQ3YS41LjUgMCAwIDEtLjcwOC0uNzA3bC42NDctLjY0Ny0uNjQ3LS42NDZhLjUuNSAwIDAgMSAuNzA4LS43MDdaIi8+Cjwvc3ZnPg==)*/
const HouseXFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-x-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
  <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-.646-4.854.646.647.646-.646a.5.5 0 0 1 .708.707l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 0 1-.708-.707l.647-.647-.647-.646a.5.5 0 0 1 .708-.707Z"/>
</svg>
      )}
    />
  );

export default HouseXFill;

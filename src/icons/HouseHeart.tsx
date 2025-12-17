import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA2Ljk4MkM5LjY2NCA1LjMwOSAxMy44MjUgOC4yMzYgOCAxMiAyLjE3NSA4LjIzNiA2LjMzNiA1LjMwOSA4IDYuOTgyIi8+CiAgPHBhdGggZD0iTTguNzA3IDEuNWExIDEgMCAwIDAtMS40MTQgMEwuNjQ2IDguMTQ2YS41LjUgMCAwIDAgLjcwOC43MDdMMiA4LjIwN1YxMy41QTEuNSAxLjUgMCAwIDAgMy41IDE1aDlhMS41IDEuNSAwIDAgMCAxLjUtMS41VjguMjA3bC42NDYuNjQ2YS41LjUgMCAwIDAgLjcwOC0uNzA3TDEzIDUuNzkzVjIuNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M3pNMTMgNy4yMDdWMTMuNWEuNS41IDAgMCAxLS41LjVoLTlhLjUuNSAwIDAgMS0uNS0uNVY3LjIwN2w1LTV6Ii8+Cjwvc3ZnPg==)*/
const HouseHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982"/>
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
</svg>
      )}
    />
  );

export default HouseHeart;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stopwatch-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDBhLjUuNSAwIDAgMCAwIDFIN3YxLjA3QTcuMDAxIDcuMDAxIDAgMCAwIDggMTZhNyA3IDAgMCAwIDUuMjktMTEuNTg0bC4wMTMtLjAxMi4zNTQtLjM1NC4zNTMuMzU0YS41LjUgMCAxIDAgLjcwNy0uNzA3bC0xLjQxNC0xLjQxNWEuNS41IDAgMSAwLS43MDcuNzA3bC4zNTQuMzU0LS4zNTQuMzU0LS4wMTIuMDEyQTYuOTcgNi45NyAwIDAgMCA5IDIuMDcxVjFoLjVhLjUuNSAwIDAgMCAwLTF6bTIgNS42VjlhLjUuNSAwIDAgMS0uNS41SDQuNWEuNS41IDAgMCAxIDAtMWgzVjUuNmEuNS41IDAgMSAxIDEgMCIvPgo8L3N2Zz4=)*/
const StopwatchFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stopwatch-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
</svg>
      )}
    />
  );

export default StopwatchFill;

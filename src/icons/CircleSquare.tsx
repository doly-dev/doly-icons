import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![circle-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA2YTYgNiAwIDEgMSAxMiAwQTYgNiAwIDAgMSAwIDYiLz4KICA8cGF0aCBkPSJNMTIuOTMgNWgxLjU3YS41LjUgMCAwIDEgLjUuNXY5YS41LjUgMCAwIDEtLjUuNWgtOWEuNS41IDAgMCAxLS41LS41di0xLjU3YTcgNyAwIDAgMS0xLS4yMnYxLjc5QTEuNSAxLjUgMCAwIDAgNS41IDE2aDlhMS41IDEuNSAwIDAgMCAxLjUtMS41di05QTEuNSAxLjUgMCAwIDAgMTQuNSA0aC0xLjc5cS4xNDUuNDg2LjIyIDEiLz4KPC9zdmc+)*/
const CircleSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="circle-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 6a6 6 0 1 1 12 0A6 6 0 0 1 0 6"/>
  <path d="M12.93 5h1.57a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1.57a7 7 0 0 1-1-.22v1.79A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4h-1.79q.145.486.22 1"/>
</svg>
      )}
    />
  );

export default CircleSquare;

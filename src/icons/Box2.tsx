import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi45NS40YTEgMSAwIDAgMSAuOC0uNGg4LjVhMSAxIDAgMCAxIC44LjRsMi44NSAzLjhhLjUuNSAwIDAgMSAuMS4zVjE1YTEgMSAwIDAgMS0xIDFIMWExIDEgMCAwIDEtMS0xVjQuNWEuNS41IDAgMCAxIC4xLS4zek03LjUgMUgzLjc1TDEuNSA0aDZ6bTEgMHYzaDZsLTIuMjUtM3pNMTUgNUgxdjEwaDE0eiIvPgo8L3N2Zz4=)*/
const Box2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3zM7.5 1H3.75L1.5 4h6zm1 0v3h6l-2.25-3zM15 5H1v10h14z"/>
</svg>
      )}
    />
  );

export default Box2;

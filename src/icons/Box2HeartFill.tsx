import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box2-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy43NSAwYTEgMSAwIDAgMC0uOC40TC4xIDQuMmEuNS41IDAgMCAwLS4xLjNWMTVhMSAxIDAgMCAwIDEgMWgxNGExIDEgMCAwIDAgMS0xVjQuNWEuNS41IDAgMCAwLS4xLS4zTDEzLjA1LjRhMSAxIDAgMCAwLS44LS40ek04LjUgNGg2bC41LjY2N1Y1SDF2LS4zMzNMMS41IDRoNlYxaDF6TTggNy45OTNjMS42NjQtMS43MTEgNS44MjUgMS4yODMgMCA1LjEzMi01LjgyNS0zLjg1LTEuNjY0LTYuODQzIDAtNS4xMzIiLz4KPC9zdmc+)*/
const Box2HeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box2-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM8.5 4h6l.5.667V5H1v-.333L1.5 4h6V1h1zM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default Box2HeartFill;

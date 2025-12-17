import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box2-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA3Ljk4MkM5LjY2NCA2LjMwOSAxMy44MjUgOS4yMzYgOCAxMyAyLjE3NSA5LjIzNiA2LjMzNiA2LjMxIDggNy45ODIiLz4KICA8cGF0aCBkPSJNMy43NSAwYTEgMSAwIDAgMC0uOC40TC4xIDQuMmEuNS41IDAgMCAwLS4xLjNWMTVhMSAxIDAgMCAwIDEgMWgxNGExIDEgMCAwIDAgMS0xVjQuNWEuNS41IDAgMCAwLS4xLS4zTDEzLjA1LjRhMSAxIDAgMCAwLS44LS40em0wIDFINy41djNoLTZ6TTguNSA0VjFoMy43NWwyLjI1IDN6TTE1IDV2MTBIMVY1eiIvPgo8L3N2Zz4=)*/
const Box2Heart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box2-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982"/>
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z"/>
</svg>
      )}
    />
  );

export default Box2Heart;

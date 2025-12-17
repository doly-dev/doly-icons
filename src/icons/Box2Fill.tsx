import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy43NSAwYTEgMSAwIDAgMC0uOC40TC4xIDQuMmEuNS41IDAgMCAwLS4xLjNWMTVhMSAxIDAgMCAwIDEgMWgxNGExIDEgMCAwIDAgMS0xVjQuNWEuNS41IDAgMCAwLS4xLS4zTDEzLjA1LjRhMSAxIDAgMCAwLS44LS40ek0xNSA0LjY2N1Y1SDF2LS4zMzNMMS41IDRoNlYxaDF2M2g2eiIvPgo8L3N2Zz4=)*/
const Box2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4zM15 4.667V5H1v-.333L1.5 4h6V1h1v3h6z"/>
</svg>
      )}
    />
  );

export default Box2Fill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![play-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTYuNzkgNS4wOTNBLjUuNSAwIDAgMCA2IDUuNXY1YS41LjUgMCAwIDAgLjc5LjQwN2wzLjUtMi41YS41LjUgMCAwIDAgMC0uODE0eiIvPgo8L3N2Zz4=)*/
const PlayCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="play-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
</svg>
      )}
    />
  );

export default PlayCircleFill;

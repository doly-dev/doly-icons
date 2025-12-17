import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![play-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMTEuNTk2IDguNjk3LTYuMzYzIDMuNjkyYy0uNTQuMzEzLTEuMjMzLS4wNjYtMS4yMzMtLjY5N1Y0LjMwOGMwLS42My42OTItMS4wMSAxLjIzMy0uNjk2bDYuMzYzIDMuNjkyYS44MDIuODAyIDAgMCAxIDAgMS4zOTMiLz4KPC9zdmc+)*/
const PlayFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="play-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>
      )}
    />
  );

export default PlayFill;

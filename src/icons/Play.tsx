import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuODA0IDggNSA0LjYzM3Y2LjczNHptLjc5Mi0uNjk2YS44MDIuODAyIDAgMCAxIDAgMS4zOTJsLTYuMzYzIDMuNjkyQzQuNzEzIDEyLjY5IDQgMTIuMzQ1IDQgMTEuNjkyVjQuMzA4YzAtLjY1My43MTMtLjk5OCAxLjIzMy0uNjk2eiIvPgo8L3N2Zz4=)*/
const Play: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="play"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.804 8 5 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg>
      )}
    />
  );

export default Play;

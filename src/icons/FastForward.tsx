import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fast-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi44MDQgOCAxIDQuNjMzdjYuNzM0em0uNzkyLS42OTZhLjgwMi44MDIgMCAwIDEgMCAxLjM5MmwtNi4zNjMgMy42OTJDLjcxMyAxMi42OSAwIDEyLjM0NSAwIDExLjY5MlY0LjMwOGMwLS42NTMuNzEzLS45OTggMS4yMzMtLjY5NnoiLz4KICA8cGF0aCBkPSJNMTQuODA0IDggOSA0LjYzM3Y2LjczNHptLjc5Mi0uNjk2YS44MDIuODAyIDAgMCAxIDAgMS4zOTJsLTYuMzYzIDMuNjkyQzguNzEzIDEyLjY5IDggMTIuMzQ1IDggMTEuNjkyVjQuMzA4YzAtLjY1My43MTMtLjk5OCAxLjIzMy0uNjk2eiIvPgo8L3N2Zz4=)*/
const FastForward: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fast-forward"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.804 8 1 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
  <path d="M14.804 8 9 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z"/>
</svg>
      )}
    />
  );

export default FastForward;

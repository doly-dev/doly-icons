import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rewind](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4xOTYgOCAxNSA0LjYzM3Y2LjczNHptLS43OTItLjY5NmEuODAyLjgwMiAwIDAgMCAwIDEuMzkybDYuMzYzIDMuNjkyYy41Mi4zMDIgMS4yMzMtLjA0MyAxLjIzMy0uNjk2VjQuMzA4YzAtLjY1My0uNzEzLS45OTgtMS4yMzMtLjY5NnoiLz4KICA8cGF0aCBkPSJNMS4xOTYgOCA3IDQuNjMzdjYuNzM0em0tLjc5Mi0uNjk2YS44MDIuODAyIDAgMCAwIDAgMS4zOTJsNi4zNjMgMy42OTJjLjUyLjMwMiAxLjIzMy0uMDQzIDEuMjMzLS42OTZWNC4zMDhjMC0uNjUzLS43MTMtLjk5OC0xLjIzMy0uNjk2eiIvPgo8L3N2Zz4=)*/
const Rewind: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rewind"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.196 8 15 4.633v6.734zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
  <path d="M1.196 8 7 4.633v6.734zm-.792-.696a.802.802 0 0 0 0 1.392l6.363 3.692c.52.302 1.233-.043 1.233-.696V4.308c0-.653-.713-.998-1.233-.696z"/>
</svg>
      )}
    />
  );

export default Rewind;

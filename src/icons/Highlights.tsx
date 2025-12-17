import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![highlights](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDAgMCA4YTggOCAwIDAgMCAxNiAwbS04IDV2MUg0LjVhLjUuNSAwIDAgMC0uMDkzLjAwOUE3IDcgMCAwIDEgMy4xIDEzem0wLTFIMi4yNTVhNyA3IDAgMCAxLS41ODEtMUg4em0tNi43MS0yYTcgNyAwIDAgMS0uMjItMUg4djF6TTEgOHEwLS41MS4wNy0xSDh2MXptLjI5LTJxLjE1NS0uNTE5LjM4NC0xSDh2MXptLjk2NS0ycS4zNzctLjU0Ljg0Ni0xSDh2MXptMi4xMzctMkE2Ljk3IDYuOTcgMCAwIDEgOCAxdjF6Ii8+Cjwvc3ZnPg==)*/
const Highlights: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="highlights"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z"/>
</svg>
      )}
    />
  );

export default Highlights;

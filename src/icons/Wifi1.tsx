import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wifi-1](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuMDQ2IDEwLjQ1NGMuMjI2LS4yMjYuMTg1LS42MDUtLjEtLjc1QTYuNSA2LjUgMCAwIDAgOCA5Yy0xLjA2IDAtMi4wNjIuMjU0LTIuOTQ2LjcwNC0uMjg1LjE0NS0uMzI2LjUyNC0uMS43NWwuMDE1LjAxNWMuMTYuMTYuNDA3LjE5LjYxMS4wOUE1LjUgNS41IDAgMCAxIDggMTBjLjg2OCAwIDEuNjkuMjAxIDIuNDIuNTYuMjAzLjEuNDUuMDcuNjExLS4wOTF6TTkuMDYgMTIuNDRjLjE5Ni0uMTk2LjE5OC0uNTItLjA0LS42NkEyIDIgMCAwIDAgOCAxMS41YTIgMiAwIDAgMC0xLjAyLjI4Yy0uMjM4LjE0LS4yMzYuNDY0LS4wNC42NmwuNzA2LjcwNmEuNS41IDAgMCAwIC43MDcgMGwuNzA4LS43MDd6Ii8+Cjwvc3ZnPg==)*/
const Wifi1: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wifi-1"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.046 10.454c.226-.226.185-.605-.1-.75A6.5 6.5 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.5 5.5 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.611-.091zM9.06 12.44c.196-.196.198-.52-.04-.66A2 2 0 0 0 8 11.5a2 2 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.708-.707z"/>
</svg>
      )}
    />
  );

export default Wifi1;

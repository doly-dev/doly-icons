import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-star](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy44NCA0LjFhLjE3OC4xNzggMCAwIDEgLjMyIDBsLjYzNCAxLjI4NWEuMTguMTggMCAwIDAgLjEzNC4wOThsMS40Mi4yMDZjLjE0NS4wMjEuMjA0LjIuMDk4LjMwM0w5LjQyIDYuOTkzYS4xOC4xOCAwIDAgMC0uMDUxLjE1OGwuMjQyIDEuNDE0YS4xNzguMTc4IDAgMCAxLS4yNTguMTg3bC0xLjI3LS42NjhhLjE4LjE4IDAgMCAwLS4xNjUgMGwtMS4yNy42NjhhLjE3OC4xNzggMCAwIDEtLjI1Ny0uMTg3bC4yNDItMS40MTRhLjE4LjE4IDAgMCAwLS4wNS0uMTU4bC0xLjAzLTEuMDAxYS4xNzguMTc4IDAgMCAxIC4wOTgtLjMwM2wxLjQyLS4yMDZhLjE4LjE4IDAgMCAwIC4xMzQtLjA5OHoiLz4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEzLjVhLjUuNSAwIDAgMS0uNzc3LjQxNkw4IDEzLjEwMWwtNS4yMjMgMi44MTVBLjUuNSAwIDAgMSAyIDE1LjV6bTItMWExIDEgMCAwIDAtMSAxdjEyLjU2Nmw0LjcyMy0yLjQ4MmEuNS41IDAgMCAxIC41NTQgMEwxMyAxNC41NjZWMmExIDEgMCAwIDAtMS0xeiIvPgo8L3N2Zz4=)*/
const BookmarkStar: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-star"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.84 4.1a.178.178 0 0 1 .32 0l.634 1.285a.18.18 0 0 0 .134.098l1.42.206c.145.021.204.2.098.303L9.42 6.993a.18.18 0 0 0-.051.158l.242 1.414a.178.178 0 0 1-.258.187l-1.27-.668a.18.18 0 0 0-.165 0l-1.27.668a.178.178 0 0 1-.257-.187l.242-1.414a.18.18 0 0 0-.05-.158l-1.03-1.001a.178.178 0 0 1 .098-.303l1.42-.206a.18.18 0 0 0 .134-.098z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default BookmarkStar;

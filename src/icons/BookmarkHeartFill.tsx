import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxNS41YS41LjUgMCAwIDAgLjc0LjQzOUw4IDEzLjA2OWw1LjI2IDIuODdBLjUuNSAwIDAgMCAxNCAxNS41VjJhMiAyIDAgMCAwLTItMkg0YTIgMiAwIDAgMC0yIDJ6TTggNC40MWMxLjM4Ny0xLjQyNSA0Ljg1NCAxLjA3IDAgNC4yNzdDMy4xNDYgNS40OCA2LjYxMyAyLjk4NiA4IDQuNDEyeiIvPgo8L3N2Zz4=)*/
const BookmarkHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 15.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zM8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
</svg>
      )}
    />
  );

export default BookmarkHeartFill;

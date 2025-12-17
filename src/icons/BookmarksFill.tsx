import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmarks-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiA0YTIgMiAwIDAgMSAyLTJoNmEyIDIgMCAwIDEgMiAydjExLjVhLjUuNSAwIDAgMS0uNzc3LjQxNkw3IDEzLjEwMWwtNC4yMjMgMi44MTVBLjUuNSAwIDAgMSAyIDE1LjV6Ii8+CiAgPHBhdGggZD0iTTQuMjY4IDFBMiAyIDAgMCAxIDYgMGg2YTIgMiAwIDAgMSAyIDJ2MTEuNWEuNS41IDAgMCAxLS43NzcuNDE2TDEzIDEzLjc2OFYyYTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==)*/
const BookmarksFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmarks-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5z"/>
  <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default BookmarksFill;

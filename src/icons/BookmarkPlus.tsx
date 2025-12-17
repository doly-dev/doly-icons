import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEzLjVhLjUuNSAwIDAgMS0uNzc3LjQxNkw4IDEzLjEwMWwtNS4yMjMgMi44MTVBLjUuNSAwIDAgMSAyIDE1LjV6bTItMWExIDEgMCAwIDAtMSAxdjEyLjU2Nmw0LjcyMy0yLjQ4MmEuNS41IDAgMCAxIC41NTQgMEwxMyAxNC41NjZWMmExIDEgMCAwIDAtMS0xeiIvPgogIDxwYXRoIGQ9Ik04IDRhLjUuNSAwIDAgMSAuNS41VjZIMTBhLjUuNSAwIDAgMSAwIDFIOC41djEuNWEuNS41IDAgMCAxLTEgMFY3SDZhLjUuNSAwIDAgMSAwLTFoMS41VjQuNUEuNS41IDAgMCAxIDggNCIvPgo8L3N2Zz4=)*/
const BookmarkPlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4"/>
</svg>
      )}
    />
  );

export default BookmarkPlus;

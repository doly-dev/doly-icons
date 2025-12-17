import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmarks](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiA0YTIgMiAwIDAgMSAyLTJoNmEyIDIgMCAwIDEgMiAydjExLjVhLjUuNSAwIDAgMS0uNzc3LjQxNkw3IDEzLjEwMWwtNC4yMjMgMi44MTVBLjUuNSAwIDAgMSAyIDE1LjV6bTItMWExIDEgMCAwIDAtMSAxdjEwLjU2NmwzLjcyMy0yLjQ4MmEuNS41IDAgMCAxIC41NTQgMEwxMSAxNC41NjZWNGExIDEgMCAwIDAtMS0xeiIvPgogIDxwYXRoIGQ9Ik00LjI2OCAxSDEyYTEgMSAwIDAgMSAxIDF2MTEuNzY4bC4yMjMuMTQ4QS41LjUgMCAwIDAgMTQgMTMuNVYyYTIgMiAwIDAgMC0yLTJINmEyIDIgMCAwIDAtMS43MzIgMSIvPgo8L3N2Zz4=)*/
const Bookmarks: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmarks"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v10.566l3.723-2.482a.5.5 0 0 1 .554 0L11 14.566V4a1 1 0 0 0-1-1z"/>
  <path d="M4.268 1H12a1 1 0 0 1 1 1v11.768l.223.148A.5.5 0 0 0 14 13.5V2a2 2 0 0 0-2-2H6a2 2 0 0 0-1.732 1"/>
</svg>
      )}
    />
  );

export default Bookmarks;

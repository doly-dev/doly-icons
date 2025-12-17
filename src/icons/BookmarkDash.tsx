import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01LjUgNi41QS41LjUgMCAwIDEgNiA2aDRhLjUuNSAwIDAgMSAwIDFINmEuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZD0iTTIgMmEyIDIgMCAwIDEgMi0yaDhhMiAyIDAgMCAxIDIgMnYxMy41YS41LjUgMCAwIDEtLjc3Ny40MTZMOCAxMy4xMDFsLTUuMjIzIDIuODE1QS41LjUgMCAwIDEgMiAxNS41em0yLTFhMSAxIDAgMCAwLTEgMXYxMi41NjZsNC43MjMtMi40ODJhLjUuNSAwIDAgMSAuNTU0IDBMMTMgMTQuNTY2VjJhMSAxIDAgMCAwLTEtMXoiLz4KPC9zdmc+)*/
const BookmarkDash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-dash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M5.5 6.5A.5.5 0 0 1 6 6h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default BookmarkDash;

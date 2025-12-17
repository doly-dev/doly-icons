import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi42NDYgNS42NDZhLjUuNSAwIDEgMSAuNzA4LjcwOEw1LjcwNyA4bDEuNjQ3IDEuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTItMmEuNS41IDAgMCAxIDAtLjcwOHptMi43MDggMGEuNS41IDAgMSAwLS43MDguNzA4TDEwLjI5MyA4IDguNjQ2IDkuNjQ2YS41LjUgMCAwIDAgLjcwOC43MDhsMi0yYS41LjUgMCAwIDAgMC0uNzA4eiIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAxIDItMmg4YTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ6bTEwLTFINGExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMSIvPgo8L3N2Zz4=)*/
const FileCode: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-code"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.646 5.646a.5.5 0 1 1 .708.708L5.707 8l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0a.5.5 0 1 0-.708.708L10.293 8 8.646 9.646a.5.5 0 0 0 .708.708l2-2a.5.5 0 0 0 0-.708z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default FileCode;

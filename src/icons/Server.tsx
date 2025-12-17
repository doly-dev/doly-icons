import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![server](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS4zMzMgMi42NjdDMS4zMzMgMS4xOTQgNC4zMTggMCA4IDBzNi42NjcgMS4xOTQgNi42NjcgMi42NjdWNGMwIDEuNDczLTIuOTg1IDIuNjY3LTYuNjY3IDIuNjY3UzEuMzMzIDUuNDczIDEuMzMzIDR6Ii8+CiAgPHBhdGggZD0iTTEuMzMzIDYuMzM0djNDMS4zMzMgMTAuODA1IDQuMzE4IDEyIDggMTJzNi42NjctMS4xOTQgNi42NjctMi42NjdWNi4zMzRhNi41IDYuNSAwIDAgMS0xLjQ1OC43OUMxMS44MSA3LjY4NCA5Ljk2NyA4IDggOHMtMy44MDktLjMxNy01LjIwOC0uODc2YTYuNSA2LjUgMCAwIDEtMS40NTgtLjc5eiIvPgogIDxwYXRoIGQ9Ik0xNC42NjcgMTEuNjY4YTYuNSA2LjUgMCAwIDEtMS40NTguNzg5Yy0xLjQuNTYtMy4yNDIuODc2LTUuMjEuODc2LTEuOTY2IDAtMy44MDktLjMxNi01LjIwOC0uODc2YTYuNSA2LjUgMCAwIDEtMS40NTgtLjc5djEuNjY2QzEuMzMzIDE0LjgwNiA0LjMxOCAxNiA4IDE2czYuNjY3LTEuMTk0IDYuNjY3LTIuNjY3eiIvPgo8L3N2Zz4=)*/
const Server: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="server"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4z"/>
  <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.5 6.5 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8s-3.809-.317-5.208-.876a6.5 6.5 0 0 1-1.458-.79z"/>
  <path d="M14.667 11.668a6.5 6.5 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.5 6.5 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667z"/>
</svg>
      )}
    />
  );

export default Server;

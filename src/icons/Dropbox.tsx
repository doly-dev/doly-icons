import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![dropbox](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4wMSA0LjU1NSA0LjAwNSA3LjExIDguMDEgOS42NjUgNC4wMDUgMTIuMjIgMCA5LjY1MWw0LjAwNS0yLjU1NUwwIDQuNTU1IDQuMDA1IDJ6bS00LjAyNiA4LjQ4NyA0LjAwNi0yLjU1NSA0LjAwNSAyLjU1NS00LjAwNSAyLjU1NXptNC4wMjYtMy4zOSA0LjAwNS0yLjU1Nkw4LjAxIDQuNTU1IDExLjk5NSAyIDE2IDQuNTU1IDExLjk5NSA3LjExIDE2IDkuNjY1bC00LjAwNSAyLjU1NXoiLz4KPC9zdmc+)*/
const Dropbox: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dropbox"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.01 4.555 4.005 7.11 8.01 9.665 4.005 12.22 0 9.651l4.005-2.555L0 4.555 4.005 2zm-4.026 8.487 4.006-2.555 4.005 2.555-4.005 2.555zm4.026-3.39 4.005-2.556L8.01 4.555 11.995 2 16 4.555 11.995 7.11 16 9.665l-4.005 2.555z"/>
</svg>
      )}
    />
  );

export default Dropbox;

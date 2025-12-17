import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-expand-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNWEuNS41IDAgMCAxLS41LS41di0xM2EuNS41IDAgMCAxIDEgMHYxM2EuNS41IDAgMCAxLS41LjVNLjE0NiA4LjM1NGEuNS41IDAgMCAxIDAtLjcwOGwyLTJhLjUuNSAwIDEgMSAuNzA4LjcwOEwxLjcwNyA3LjVINS41YS41LjUgMCAwIDEgMCAxSDEuNzA3bDEuMTQ3IDEuMTQ2YS41LjUgMCAwIDEtLjcwOC43MDh6TTEwIDhhLjUuNSAwIDAgMSAuNS0uNWgzLjc5M2wtMS4xNDctMS4xNDZhLjUuNSAwIDAgMSAuNzA4LS43MDhsMiAyYS41LjUgMCAwIDEgMCAuNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTQuMjkzIDguNUgxMC41QS41LjUgMCAwIDEgMTAgOCIvPgo8L3N2Zz4=)*/
const ArrowsExpandVertical: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-expand-vertical"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
</svg>
      )}
    />
  );

export default ArrowsExpandVertical;

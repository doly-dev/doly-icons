import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-vertical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4zNTQgMTQuODU0YS41LjUgMCAwIDEtLjcwOCAwbC0yLTJhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEzLjI5M1YyLjcwN0w2LjM1NCAzLjg1NGEuNS41IDAgMSAxLS43MDgtLjcwOGwyLTJhLjUuNSAwIDAgMSAuNzA4IDBsMiAyYS41LjUgMCAwIDEtLjcwOC43MDhMOC41IDIuNzA3djEwLjU4NmwxLjE0Ni0xLjE0N2EuNS41IDAgMCAxIC43MDguNzA4eiIvPgo8L3N2Zz4=)*/
const ArrowsVertical: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-vertical"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.354 14.854a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 13.293V2.707L6.354 3.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 2.707v10.586l1.146-1.147a.5.5 0 0 1 .708.708z"/>
</svg>
      )}
    />
  );

export default ArrowsVertical;

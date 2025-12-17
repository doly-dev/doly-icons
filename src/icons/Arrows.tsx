import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS4xNDYgOC4zNTRhLjUuNSAwIDAgMSAwLS43MDhsMi0yYS41LjUgMCAxIDEgLjcwOC43MDhMMi43MDcgNy41aDEwLjU4NmwtMS4xNDctMS4xNDZhLjUuNSAwIDAgMSAuNzA4LS43MDhsMiAyYS41LjUgMCAwIDEgMCAuNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDguNUgyLjcwN2wxLjE0NyAxLjE0NmEuNS41IDAgMCAxLS43MDguNzA4eiIvPgo8L3N2Zz4=)*/
const Arrows: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L2.707 7.5h10.586l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L13.293 8.5H2.707l1.147 1.146a.5.5 0 0 1-.708.708z"/>
</svg>
      )}
    />
  );

export default Arrows;

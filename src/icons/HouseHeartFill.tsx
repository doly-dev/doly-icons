import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yOTMgMS41YTEgMSAwIDAgMSAxLjQxNCAwTDExIDMuNzkzVjIuNWEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djMuMjkzbDIuMzU0IDIuMzUzYS41LjUgMCAwIDEtLjcwOC43MDdMOCAyLjIwNyAxLjM1NCA4Ljg1M2EuNS41IDAgMSAxLS43MDgtLjcwN3oiLz4KICA8cGF0aCBkPSJtMTQgOS4yOTMtNi02LTYgNlYxMy41QTEuNSAxLjUgMCAwIDAgMy41IDE1aDlhMS41IDEuNSAwIDAgMCAxLjUtMS41em0tNi0uODExYzEuNjY0LTEuNjczIDUuODI1IDEuMjU0IDAgNS4wMTgtNS44MjUtMy43NjQtMS42NjQtNi42OTEgMC01LjAxOCIvPgo8L3N2Zz4=)*/
const HouseHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207 1.354 8.853a.5.5 0 1 1-.708-.707z"/>
  <path d="m14 9.293-6-6-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.691 0-5.018"/>
</svg>
      )}
    />
  );

export default HouseHeartFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![heart-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAyLjc0OHYxMS4wNDdjMy40NTItMi4zNjggNS4zNjUtNC41NDIgNi4yODYtNi4zNTcuOTU1LTEuODg2LjgzOC0zLjM2Mi4zMTQtNC4zODVDMTMuNDg2Ljg3OCAxMC40LjI4IDguNzE3IDIuMDF6TTggMTVDLTcuMzMzIDQuODY4IDMuMjc5LTMuMDQgNy44MjQgMS4xNDNxLjA5LjA4My4xNzYuMTcxYTMgMyAwIDAgMSAuMTc2LS4xN0MxMi43Mi0zLjA0MiAyMy4zMzMgNC44NjcgOCAxNSIvPgo8L3N2Zz4=)*/
const HeartHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heart-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 2.748v11.047c3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
</svg>
      )}
    />
  );

export default HeartHalf;

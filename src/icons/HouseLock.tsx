import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yOTMgMS41YTEgMSAwIDAgMSAxLjQxNCAwTDExIDMuNzkzVjIuNWEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djMuMjkzbDIuMzU0IDIuMzUzYS41LjUgMCAwIDEtLjcwOC43MDhMOCAyLjIwN2wtNSA1VjEzLjVhLjUuNSAwIDAgMCAuNS41aDRhLjUuNSAwIDAgMSAwIDFoLTRBMS41IDEuNSAwIDAgMSAyIDEzLjVWOC4yMDdsLS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4eiIvPgogIDxwYXRoIGQ9Ik0xMCAxM2ExIDEgMCAwIDEgMS0xdi0xYTIgMiAwIDAgMSA0IDB2MWExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMCAxLTEgMWgtNGExIDEgMCAwIDEtMS0xem0zLTNhMSAxIDAgMCAwLTEgMXYxaDJ2LTFhMSAxIDAgMCAwLTEtMSIvPgo8L3N2Zz4=)*/
const HouseLock: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-lock"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z"/>
  <path d="M10 13a1 1 0 0 1 1-1v-1a2 2 0 0 1 4 0v1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zm3-3a1 1 0 0 0-1 1v1h2v-1a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default HouseLock;

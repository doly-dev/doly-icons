import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check2-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAxNC41QTEuNSAxLjUgMCAwIDEgMS41IDEzVjNBMS41IDEuNSAwIDAgMSAzIDEuNWg4YS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMC0uNS41djEwYS41LjUgMCAwIDAgLjUuNWgxMGEuNS41IDAgMCAwIC41LS41VjhhLjUuNSAwIDAgMSAxIDB2NWExLjUgMS41IDAgMCAxLTEuNSAxLjV6Ii8+CiAgPHBhdGggZD0ibTguMzU0IDEwLjM1NCA3LTdhLjUuNSAwIDAgMC0uNzA4LS43MDhMOCA5LjI5MyA1LjM1NCA2LjY0NmEuNS41IDAgMSAwLS43MDguNzA4bDMgM2EuNS41IDAgMCAwIC43MDggMCIvPgo8L3N2Zz4=)*/
const Check2Square: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check2-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>
      )}
    />
  );

export default Check2Square;

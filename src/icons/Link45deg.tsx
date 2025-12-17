import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![link-45deg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC43MTUgNi41NDIgMy4zNDMgNy45MTRhMyAzIDAgMSAwIDQuMjQzIDQuMjQzbDEuODI4LTEuODI5QTMgMyAwIDAgMCA4LjU4NiA1LjVMOCA2LjA4NmExIDEgMCAwIDAtLjE1NC4xOTkgMiAyIDAgMCAxIC44NjEgMy4zMzdMNi44OCAxMS40NWEyIDIgMCAxIDEtMi44My0yLjgzbC43OTMtLjc5MmE0IDQgMCAwIDEtLjEyOC0xLjI4N3oiLz4KICA8cGF0aCBkPSJNNi41ODYgNC42NzJBMyAzIDAgMCAwIDcuNDE0IDkuNWwuNzc1LS43NzZhMiAyIDAgMCAxLS44OTYtMy4zNDZMOS4xMiAzLjU1YTIgMiAwIDEgMSAyLjgzIDIuODNsLS43OTMuNzkyYy4xMTIuNDIuMTU1Ljg1NS4xMjggMS4yODdsMS4zNzItMS4zNzJhMyAzIDAgMSAwLTQuMjQzLTQuMjQzeiIvPgo8L3N2Zz4=)*/
const Link45deg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="link-45deg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>
      )}
    />
  );

export default Link45deg;

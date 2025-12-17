import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![link](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4zNTQgNS41SDRhMyAzIDAgMCAwIDAgNmgzYTMgMyAwIDAgMCAyLjgzLTRIOXEtLjEzIDAtLjI1LjAzMUEyIDIgMCAwIDEgNyAxMC41SDRhMiAyIDAgMSAxIDAtNGgxLjUzNWMuMjE4LS4zNzYuNDk1LS43MTQuODItMXoiLz4KICA8cGF0aCBkPSJNOSA1LjVhMyAzIDAgMCAwLTIuODMgNGgxLjA5OEEyIDIgMCAwIDEgOSA2LjVoM2EyIDIgMCAxIDEgMCA0aC0xLjUzNWE0IDQgMCAwIDEtLjgyIDFIMTJhMyAzIDAgMSAwIDAtNnoiLz4KPC9zdmc+)*/
const Link: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="link"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9q-.13 0-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z"/>
  <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4 4 0 0 1-.82 1H12a3 3 0 1 0 0-6z"/>
</svg>
      )}
    />
  );

export default Link;

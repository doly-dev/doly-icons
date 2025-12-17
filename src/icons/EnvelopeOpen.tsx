import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-open](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC40NyAxLjMxOGExIDEgMCAwIDAtLjk0IDBsLTYgMy4yQTEgMSAwIDAgMCAxIDUuNHYuODE3bDUuNzUgMy40NUw4IDguOTE3bDEuMjUuNzVMMTUgNi4yMTdWNS40YTEgMSAwIDAgMC0uNTMtLjg4MnpNMTUgNy4zODNsLTQuNzc4IDIuODY3TDE1IDEzLjExN3ptLS4wMzUgNi44OEw4IDEwLjA4MmwtNi45NjUgNC4xOEExIDEgMCAwIDAgMiAxNWgxMmExIDEgMCAwIDAgLjk2NS0uNzM4Wk0xIDEzLjExNmw0Ljc3OC0yLjg2N0wxIDcuMzgzdjUuNzM0Wk03LjA1OS40MzVhMiAyIDAgMCAxIDEuODgyIDBsNiAzLjJBMiAyIDAgMCAxIDE2IDUuNFYxNGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY1LjRhMiAyIDAgMCAxIDEuMDU5LTEuNzY1eiIvPgo8L3N2Zz4=)*/
const EnvelopeOpen: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-open"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.817l5.75 3.45L8 8.917l1.25.75L15 6.217V5.4a1 1 0 0 0-.53-.882zM15 7.383l-4.778 2.867L15 13.117zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734ZM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765z"/>
</svg>
      )}
    />
  );

export default EnvelopeOpen;

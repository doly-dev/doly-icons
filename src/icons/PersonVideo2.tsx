import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-video2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAgOS4wNWEyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNSIvPgogIDxwYXRoIGQ9Ik0yIDFhMiAyIDAgMCAwLTIgMnY5YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYzYTIgMiAwIDAgMC0yLTJ6TTEgM2ExIDEgMCAwIDEgMS0xaDJ2Mkgxem00IDEwVjJoOWExIDEgMCAwIDEgMSAxdjljMCAuMjg1LS4xMi41NDMtLjMxLjcyNUMxNC4xNSAxMS40OTQgMTIuODIyIDEwIDEwIDEwYy0zLjAzNyAwLTQuMzQ1IDEuNzMtNC43OTggM3ptLTQtMmgzdjJIMmExIDEgMCAwIDEtMS0xem0zLTFIMVY4aDN6bTAtM0gxVjVoM3oiLz4KPC9zdmc+)*/
const PersonVideo2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-video2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
  <path d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM1 3a1 1 0 0 1 1-1h2v2H1zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3zm-4-2h3v2H2a1 1 0 0 1-1-1zm3-1H1V8h3zm0-3H1V5h3z"/>
</svg>
      )}
    />
  );

export default PersonVideo2;

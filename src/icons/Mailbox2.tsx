import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mailbox2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSA4LjVoMi43OTNsLjg1My44NTRBLjUuNSAwIDAgMCAxMyA5LjVoMWEuNS41IDAgMCAwIC41LS41VjhhLjUuNSAwIDAgMC0uNS0uNUg5eiIvPgogIDxwYXRoIGQ9Ik0xMiAzSDRhNCA0IDAgMCAwLTQgNHY2YTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMVY3YTQgNCAwIDAgMC00LTRNOCA3YTQgNCAwIDAgMC0xLjM1NC0zSDEyYTMgMyAwIDAgMSAzIDN2Nkg4em0tMy40MTUuMTU3QzQuNDIgNy4wODcgNC4yMTggNyA0IDdzLS40Mi4wODYtLjU4NS4xNTdDMy4xNjQgNy4yNjQgMyA3LjMzNCAzIDdhMSAxIDAgMCAxIDIgMGMwIC4zMzQtLjE2NC4yNjQtLjQxNS4xNTciLz4KPC9zdmc+)*/
const Mailbox2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mailbox2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9z"/>
  <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4M8 7a4 4 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8zm-3.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157"/>
</svg>
      )}
    />
  );

export default Mailbox2;

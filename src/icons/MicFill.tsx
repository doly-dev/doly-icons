import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mic-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAzYTMgMyAwIDAgMSA2IDB2NWEzIDMgMCAwIDEtNiAweiIvPgogIDxwYXRoIGQ9Ik0zLjUgNi41QS41LjUgMCAwIDEgNCA3djFhNCA0IDAgMCAwIDggMFY3YS41LjUgMCAwIDEgMSAwdjFhNSA1IDAgMCAxLTQuNSA0Ljk3NVYxNWgzYS41LjUgMCAwIDEgMCAxaC03YS41LjUgMCAwIDEgMC0xaDN2LTIuMDI1QTUgNSAwIDAgMSAzIDhWN2EuNS41IDAgMCAxIC41LS41Ii8+Cjwvc3ZnPg==)*/
const MicFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mic-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z"/>
  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default MicFill;

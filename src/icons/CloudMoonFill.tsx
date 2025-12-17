import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-moon-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNDczIDExYTQuNSA0LjUgMCAwIDAtOC43Mi0uOTlBMyAzIDAgMCAwIDMgMTZoOC41YTIuNSAyLjUgMCAwIDAgMC01eiIvPgogIDxwYXRoIGQ9Ik0xMS4yODYgMS43NzhhLjUuNSAwIDAgMC0uNTY1LS43NTUgNC41OTUgNC41OTUgMCAwIDAtMy4xOCA1LjAwMyA1LjUgNS41IDAgMCAxIDEuMDU1LjIwOUEzLjYgMy42IDAgMCAxIDkuODMgMi42MTdhNC41OTMgNC41OTMgMCAwIDAgNC4zMSA1Ljc0NCAzLjU4IDMuNTggMCAwIDEtMi4yNDEuNjM0cS4yNDQuNDc3LjM5NCAxYTQuNTkgNC41OSAwIDAgMCAzLjYyNC0yLjA0LjUuNSAwIDAgMC0uNTY1LS43NTUgMy41OTMgMy41OTMgMCAwIDEtNC4wNjUtNS40MjJ6Ii8+Cjwvc3ZnPg==)*/
const CloudMoonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-moon-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
  <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z"/>
</svg>
      )}
    />
  );

export default CloudMoonFill;

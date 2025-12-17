import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![menu-button](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBMS41IDEuNSAwIDAgMSAxLjUgMGg4QTEuNSAxLjUgMCAwIDEgMTEgMS41djJBMS41IDEuNSAwIDAgMSA5LjUgNWgtOEExLjUgMS41IDAgMCAxIDAgMy41ek0xLjUgMWEuNS41IDAgMCAwLS41LjV2MmEuNS41IDAgMCAwIC41LjVoOGEuNS41IDAgMCAwIC41LS41di0yYS41LjUgMCAwIDAtLjUtLjV6Ii8+CiAgPHBhdGggZD0ibTcuODIzIDIuODIzLS4zOTYtLjM5NkEuMjUuMjUgMCAwIDEgNy42MDQgMmguNzkyYS4yNS4yNSAwIDAgMSAuMTc3LjQyN2wtLjM5Ni4zOTZhLjI1LjI1IDAgMCAxLS4zNTQgME0wIDhhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjVhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTEgM3YyYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXYtMnptMTQtMVY4YTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjJ6TTIgOC41YS41LjUgMCAwIDEgLjUtLjVoOWEuNS41IDAgMCAxIDAgMWgtOWEuNS41IDAgMCAxLS41LS41bTAgNGEuNS41IDAgMCAxIC41LS41aDZhLjUuNSAwIDAgMSAwIDFoLTZhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const MenuButton: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="menu-button"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h8A1.5 1.5 0 0 1 11 1.5v2A1.5 1.5 0 0 1 9.5 5h-8A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"/>
  <path d="m7.823 2.823-.396-.396A.25.25 0 0 1 7.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default MenuButton;

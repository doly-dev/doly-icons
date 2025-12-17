import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![menu-app-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBMS41IDEuNSAwIDAgMSAxLjUgMGgyQTEuNSAxLjUgMCAwIDEgNSAxLjV2MkExLjUgMS41IDAgMCAxIDMuNSA1aC0yQTEuNSAxLjUgMCAwIDEgMCAzLjV6TTAgOGEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2NWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptMSAzdjJhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xdi0yem0xNC0xVjhhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2MnpNMiA4LjVhLjUuNSAwIDAgMSAuNS0uNWg5YS41LjUgMCAwIDEgMCAxaC05YS41LjUgMCAwIDEtLjUtLjVtMCA0YS41LjUgMCAwIDEgLjUtLjVoNmEuNS41IDAgMCAxIDAgMWgtNmEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const MenuAppFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="menu-app-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h2A1.5 1.5 0 0 1 5 1.5v2A1.5 1.5 0 0 1 3.5 5h-2A1.5 1.5 0 0 1 0 3.5zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default MenuAppFill;

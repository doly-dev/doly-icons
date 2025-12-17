import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![grid-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAyLjVBMS41IDEuNSAwIDAgMSAyLjUgMWgzQTEuNSAxLjUgMCAwIDEgNyAyLjV2M0ExLjUgMS41IDAgMCAxIDUuNSA3aC0zQTEuNSAxLjUgMCAwIDEgMSA1LjV6bTggMEExLjUgMS41IDAgMCAxIDEwLjUgMWgzQTEuNSAxLjUgMCAwIDEgMTUgMi41djNBMS41IDEuNSAwIDAgMSAxMy41IDdoLTNBMS41IDEuNSAwIDAgMSA5IDUuNXptLTggOEExLjUgMS41IDAgMCAxIDIuNSA5aDNBMS41IDEuNSAwIDAgMSA3IDEwLjV2M0ExLjUgMS41IDAgMCAxIDUuNSAxNWgtM0ExLjUgMS41IDAgMCAxIDEgMTMuNXptOCAwQTEuNSAxLjUgMCAwIDEgMTAuNSA5aDNhMS41IDEuNSAwIDAgMSAxLjUgMS41djNhMS41IDEuNSAwIDAgMS0xLjUgMS41aC0zQTEuNSAxLjUgMCAwIDEgOSAxMy41eiIvPgo8L3N2Zz4=)*/
const GridFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="grid-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
</svg>
      )}
    />
  );

export default GridFill;

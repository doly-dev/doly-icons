import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![projector](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgNy41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwTTIuNSA2YS41LjUgMCAwIDAgMCAxaDRhLjUuNSAwIDAgMCAwLTF6bTAgMmEuNS41IDAgMCAwIDAgMWg0YS41LjUgMCAwIDAgMC0xeiIvPgogIDxwYXRoIGQ9Ik0wIDZhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjNhMiAyIDAgMCAxLTIgMiAxIDEgMCAwIDEtMSAxaC0xYTEgMSAwIDAgMS0xLTFINWExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMSAyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXYzYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY2YTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==)*/
const Projector: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="projector"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M2.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1H5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1 2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default Projector;

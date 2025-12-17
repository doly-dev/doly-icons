import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![phone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFINWExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMXpNNSAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg2YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yeiIvPgogIDxwYXRoIGQ9Ik04IDE0YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMiIvPgo8L3N2Zz4=)*/
const Phone: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="phone"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
      )}
    />
  );

export default Phone;

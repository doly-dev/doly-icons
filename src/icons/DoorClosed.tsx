import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![door-closed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAyYTEgMSAwIDAgMSAxLTFoOGExIDEgMCAwIDEgMSAxdjEzaDEuNWEuNS41IDAgMCAxIDAgMWgtMTNhLjUuNSAwIDAgMSAwLTFIM3ptMSAxM2g4VjJINHoiLz4KICA8cGF0aCBkPSJNOSA5YTEgMSAwIDEgMCAyIDAgMSAxIDAgMCAwLTIgMCIvPgo8L3N2Zz4=)*/
const DoorClosed: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="door-closed"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z"/>
  <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
</svg>
      )}
    />
  );

export default DoorClosed;

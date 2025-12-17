import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tablet-landscape-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxNGEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMnptMTEtN2ExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTIiLz4KPC9zdmc+)*/
const TabletLandscapeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tablet-landscape-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 14a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2zm11-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
      )}
    />
  );

export default TabletLandscapeFill;

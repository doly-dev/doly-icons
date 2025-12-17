import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![files](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMgMEg2YTIgMiAwIDAgMC0yIDIgMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDdhMiAyIDAgMCAwIDItMiAyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMm0wIDEzVjRhMiAyIDAgMCAwLTItMkg1YTEgMSAwIDAgMSAxLTFoN2ExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDAgMS0xIDFNMyA0YTEgMSAwIDAgMSAxLTFoN2ExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xeiIvPgo8L3N2Zz4=)*/
const Files: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="files"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default Files;

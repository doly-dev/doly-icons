import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![vr](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAxMlY0YTEgMSAwIDAgMSAxLTFoMi41VjJINGEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgyLjV2LTFINGExIDEgMCAwIDEtMS0xbTYuNSAxdjFIMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJIOS41djFIMTJhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDF6TTggMTZhLjUuNSAwIDAgMS0uNS0uNVYuNWEuNS41IDAgMCAxIDEgMHYxNWEuNS41IDAgMCAxLS41LjUiLz4KPC9zdmc+)*/
const Vr: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="vr"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 12V4a1 1 0 0 1 1-1h2.5V2H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5v-1H4a1 1 0 0 1-1-1m6.5 1v1H12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.5v1H12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM8 16a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 1 0v15a.5.5 0 0 1-.5.5"/>
</svg>
      )}
    />
  );

export default Vr;

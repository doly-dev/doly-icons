import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![view-stacked](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAwaDEwYTIgMiAwIDAgMSAyIDJ2M2EyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMlYyYTIgMiAwIDAgMSAyLTJtMCAxYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTFWMmExIDEgMCAwIDAtMS0xem0wIDhoMTBhMiAyIDAgMCAxIDIgMnYzYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi0zYTIgMiAwIDAgMSAyLTJtMCAxYTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTF2LTNhMSAxIDAgMCAwLTEtMXoiLz4KPC9zdmc+)*/
const ViewStacked: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="view-stacked"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default ViewStacked;

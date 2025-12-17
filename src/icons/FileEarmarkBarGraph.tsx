import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-bar-graph](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAgMTMuNWEuNS41IDAgMCAwIC41LjVoMWEuNS41IDAgMCAwIC41LS41di02YS41LjUgMCAwIDAtLjUtLjVoLTFhLjUuNSAwIDAgMC0uNS41em0tMi41LjVhLjUuNSAwIDAgMS0uNS0uNXYtNGEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMS0uNS41em0tMyAwYS41LjUgMCAwIDEtLjUtLjV2LTJhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXYyYS41LjUgMCAwIDEtLjUuNXoiLz4KICA8cGF0aCBkPSJNMTQgMTRWNC41TDkuNSAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMk05LjUgM0ExLjUgMS41IDAgMCAwIDExIDQuNWgyVjE0YTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMWg1LjV6Ii8+Cjwvc3ZnPg==)*/
const FileEarmarkBarGraph: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-bar-graph"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 13.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkBarGraph;

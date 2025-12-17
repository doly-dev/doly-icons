import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-bar-graph-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ybS0yIDExLjV2LTZhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXY2YS41LjUgMCAwIDEtLjUuNWgtMWEuNS41IDAgMCAxLS41LS41bS0yLjUuNWEuNS41IDAgMCAxLS41LS41di00YS41LjUgMCAwIDEgLjUtLjVoMWEuNS41IDAgMCAxIC41LjV2NGEuNS41IDAgMCAxLS41LjV6bS0zIDBhLjUuNSAwIDAgMS0uNS0uNXYtMmEuNS41IDAgMCAxIC41LS41aDFhLjUuNSAwIDAgMSAuNS41djJhLjUuNSAwIDAgMS0uNS41eiIvPgo8L3N2Zz4=)*/
const FileBarGraphFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-bar-graph-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 11.5v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5m-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5z"/>
</svg>
      )}
    />
  );

export default FileBarGraphFill;

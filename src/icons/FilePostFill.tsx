import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-post-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTQuNSAzaDVhLjUuNSAwIDAgMSAwIDFoLTVhLjUuNSAwIDAgMSAwLTFtMCAyaDdhLjUuNSAwIDAgMSAuNS41djhhLjUuNSAwIDAgMS0uNS41aC03YS41LjUgMCAwIDEtLjUtLjV2LThhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const FilePostFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-post-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M4.5 3h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1m0 2h7a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default FilePostFill;

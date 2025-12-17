import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pause](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAzLjVhLjUuNSAwIDAgMSAuNS41djhhLjUuNSAwIDAgMS0xIDBWNGEuNS41IDAgMCAxIC41LS41bTQgMGEuNS41IDAgMCAxIC41LjV2OGEuNS41IDAgMCAxLTEgMFY0YS41LjUgMCAwIDEgLjUtLjUiLz4KPC9zdmc+)*/
const Pause: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pause"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default Pause;

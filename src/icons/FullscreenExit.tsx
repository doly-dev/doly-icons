import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fullscreen-exit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDBhLjUuNSAwIDAgMSAuNS41djRBMS41IDEuNSAwIDAgMSA0LjUgNmgtNGEuNS41IDAgMCAxIDAtMWg0YS41LjUgMCAwIDAgLjUtLjV2LTRhLjUuNSAwIDAgMSAuNS0uNW01IDBhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMCAuNS41aDRhLjUuNSAwIDAgMSAwIDFoLTRBMS41IDEuNSAwIDAgMSAxMCA0LjV2LTRhLjUuNSAwIDAgMSAuNS0uNU0wIDEwLjVhLjUuNSAwIDAgMSAuNS0uNWg0QTEuNSAxLjUgMCAwIDEgNiAxMS41djRhLjUuNSAwIDAgMS0xIDB2LTRhLjUuNSAwIDAgMC0uNS0uNWgtNGEuNS41IDAgMCAxLS41LS41bTEwIDFhMS41IDEuNSAwIDAgMSAxLjUtMS41aDRhLjUuNSAwIDAgMSAwIDFoLTRhLjUuNSAwIDAgMC0uNS41djRhLjUuNSAwIDAgMS0xIDB6Ii8+Cjwvc3ZnPg==)*/
const FullscreenExit: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fullscreen-exit"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 0a.5.5 0 0 1 .5.5v4A1.5 1.5 0 0 1 4.5 6h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5m5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 10 4.5v-4a.5.5 0 0 1 .5-.5M0 10.5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 6 11.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5m10 1a1.5 1.5 0 0 1 1.5-1.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default FullscreenExit;

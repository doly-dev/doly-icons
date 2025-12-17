import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fullscreen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDFhLjUuNSAwIDAgMC0uNS41djRhLjUuNSAwIDAgMS0xIDB2LTRBMS41IDEuNSAwIDAgMSAxLjUgMGg0YS41LjUgMCAwIDEgMCAxek0xMCAuNWEuNS41IDAgMCAxIC41LS41aDRBMS41IDEuNSAwIDAgMSAxNiAxLjV2NGEuNS41IDAgMCAxLTEgMHYtNGEuNS41IDAgMCAwLS41LS41aC00YS41LjUgMCAwIDEtLjUtLjVNLjUgMTBhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMCAuNS41aDRhLjUuNSAwIDAgMSAwIDFoLTRBMS41IDEuNSAwIDAgMSAwIDE0LjV2LTRhLjUuNSAwIDAgMSAuNS0uNW0xNSAwYS41LjUgMCAwIDEgLjUuNXY0YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtNGEuNS41IDAgMCAxIDAtMWg0YS41LjUgMCAwIDAgLjUtLjV2LTRhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const Fullscreen: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fullscreen"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default Fullscreen;

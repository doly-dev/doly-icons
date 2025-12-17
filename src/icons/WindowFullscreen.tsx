import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![window-fullscreen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAzLjVhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtMS41IDBhLjUuNSAwIDEgMS0xIDAgLjUuNSAwIDAgMSAxIDBtMSAuNWEuNS41IDAgMSAwIDAtMSAuNS41IDAgMCAwIDAgMSIvPgogIDxwYXRoIGQ9Ik0uNSAxYS41LjUgMCAwIDAtLjUuNXYxM2EuNS41IDAgMCAwIC41LjVoMTVhLjUuNSAwIDAgMCAuNS0uNXYtMTNhLjUuNSAwIDAgMC0uNS0uNXpNMSA1VjJoMTR2M3ptMCAxaDE0djhIMXoiLz4KPC9zdmc+)*/
const WindowFullscreen: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="window-fullscreen"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 3.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5zM1 5V2h14v3zm0 1h14v8H1z"/>
</svg>
      )}
    />
  );

export default WindowFullscreen;

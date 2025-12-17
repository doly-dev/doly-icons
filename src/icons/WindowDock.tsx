import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![window-dock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDExYS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNWgxYS41LjUgMCAwIDAgLjUtLjV2LTFhLjUuNSAwIDAgMC0uNS0uNXptMy41LjVhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXYxYS41LjUgMCAwIDEtLjUuNWgtMWEuNS41IDAgMCAxLS41LS41em00LjUtLjVhLjUuNSAwIDAgMC0uNS41djFhLjUuNSAwIDAgMCAuNS41aDFhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0xNCAxYTIgMiAwIDAgMSAyIDJ2MTBhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWM2EyIDIgMCAwIDEgMi0yek0yIDE0aDEyYTEgMSAwIDAgMCAxLTFWNUgxdjhhMSAxIDAgMCAwIDEgMU0yIDJhMSAxIDAgMCAwLTEgMXYxaDE0VjNhMSAxIDAgMCAwLTEtMXoiLz4KPC9zdmc+)*/
const WindowDock: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="window-dock"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 11a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm3.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm4.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M14 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM2 14h12a1 1 0 0 0 1-1V5H1v8a1 1 0 0 0 1 1M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default WindowDock;

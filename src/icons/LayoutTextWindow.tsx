import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layout-text-window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyA2LjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgMCAxaC01YS41LjUgMCAwIDEtLjUtLjVtMCAzYS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxLS41LS41bS41IDIuNWEuNS41IDAgMCAwIDAgMWg1YS41LjUgMCAwIDAgMC0xeiIvPgogIDxwYXRoIGQ9Ik0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yem0xMiAxYTEgMSAwIDAgMSAxIDF2MUgxVjJhMSAxIDAgMCAxIDEtMXptMSAzdjEwYTEgMSAwIDAgMS0xIDFoLTJWNHptLTQgMHYxMUgyYTEgMSAwIDAgMS0xLTFWNHoiLz4KPC9zdmc+)*/
const LayoutTextWindow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layout-text-window"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1zm1 3v10a1 1 0 0 1-1 1h-2V4zm-4 0v11H2a1 1 0 0 1-1-1V4z"/>
</svg>
      )}
    />
  );

export default LayoutTextWindow;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![window](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDRhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFtMi0uNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgMG0xIC41YS41LjUgMCAxIDAgMC0xIC41LjUgMCAwIDAgMCAxIi8+CiAgPHBhdGggZD0iTTIgMWEyIDIgMCAwIDAtMiAydjEwYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYzYTIgMiAwIDAgMC0yLTJ6bTEzIDJ2MkgxVjNhMSAxIDAgMCAxIDEtMWgxMmExIDEgMCAwIDEgMSAxTTIgMTRhMSAxIDAgMCAxLTEtMVY2aDE0djdhMSAxIDAgMCAxLTEgMXoiLz4KPC9zdmc+)*/
const Window: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="window"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1M2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1z"/>
</svg>
      )}
    />
  );

export default Window;

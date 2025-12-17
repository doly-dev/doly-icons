import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![journals](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAwaDhhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAyIDIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yaDFhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWNGExIDEgMCAwIDAtMS0xSDNhMSAxIDAgMCAwLTEgMUgxYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjlhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTFINWExIDEgMCAwIDAtMSAxSDNhMiAyIDAgMCAxIDItMiIvPgogIDxwYXRoIGQ9Ik0xIDZ2LS41YS41LjUgMCAwIDEgMSAwVjZoLjVhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTF6bTAgM3YtLjVhLjUuNSAwIDAgMSAxIDBWOWguNWEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxIDAtMXptMCAyLjV2LjVILjVhLjUuNSAwIDAgMCAwIDFoMmEuNS41IDAgMCAwIDAtMUgydi0uNWEuNS41IDAgMCAwLTEgMCIvPgo8L3N2Zz4=)*/
const Journals: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="journals"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
  <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
</svg>
      )}
    />
  );

export default Journals;

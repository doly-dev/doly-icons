import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layout-sidebar-inset-reverse](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjNhMSAxIDAgMCAwLTEtMXptMTItMWEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjNhMiAyIDAgMCAxIDItMnoiLz4KICA8cGF0aCBkPSJNMTMgNGExIDEgMCAwIDAtMS0xaC0yYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDJhMSAxIDAgMCAwIDEtMXoiLz4KPC9zdmc+)*/
const LayoutSidebarInsetReverse: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layout-sidebar-inset-reverse"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"/>
  <path d="M13 4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default LayoutSidebarInsetReverse;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layout-sidebar-inset](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMmExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjNhMSAxIDAgMCAxIDEtMXpNMiAxYTIgMiAwIDAgMC0yIDJ2MTBhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjNhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNMyA0YTEgMSAwIDAgMSAxLTFoMmExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUg0YTEgMSAwIDAgMS0xLTF6Ii8+Cjwvc3ZnPg==)*/
const LayoutSidebarInset: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layout-sidebar-inset"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z"/>
  <path d="M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default LayoutSidebarInset;

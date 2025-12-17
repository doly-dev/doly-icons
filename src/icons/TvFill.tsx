import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tv-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDEzLjVBLjUuNSAwIDAgMSAzIDEzaDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNU0yIDJoMTJzMiAwIDIgMnY2czAgMi0yIDJIMnMtMiAwLTItMlY0czAtMiAyLTIiLz4KPC9zdmc+)*/
const TvFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tv-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2"/>
</svg>
      )}
    />
  );

export default TvFill;

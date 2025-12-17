import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![intersect](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjJoMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJ2LTJIMmEyIDIgMCAwIDEtMi0yem01IDEwdjJhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWNmExIDEgMCAwIDAtMS0xaC0ydjVhMiAyIDAgMCAxLTIgMnptNi04VjJhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDJWNmEyIDIgMCAwIDEgMi0yeiIvPgo8L3N2Zz4=)*/
const Intersect: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="intersect"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm5 10v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2v5a2 2 0 0 1-2 2zm6-8V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V6a2 2 0 0 1 2-2z"/>
</svg>
      )}
    />
  );

export default Intersect;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![battery](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA2YTIgMiAwIDAgMSAyLTJoMTBhMiAyIDAgMCAxIDIgMnY0YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXY0YTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMVY2YTEgMSAwIDAgMC0xLTF6bTE0IDNhMS41IDEuNSAwIDAgMS0xLjUgMS41di0zQTEuNSAxLjUgMCAwIDEgMTYgOCIvPgo8L3N2Zz4=)*/
const Battery: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="battery"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm14 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
</svg>
      )}
    />
  );

export default Battery;

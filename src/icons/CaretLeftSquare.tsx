import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-left-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMXpNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNMTAuMjA1IDEyLjQ1NkEuNS41IDAgMCAwIDEwLjUgMTJWNGEuNS41IDAgMCAwLS44MzItLjM3NGwtNC41IDRhLjUuNSAwIDAgMCAwIC43NDhsNC41IDRhLjUuNSAwIDAgMCAuNTM3LjA4MiIvPgo8L3N2Zz4=)*/
const CaretLeftSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-left-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M10.205 12.456A.5.5 0 0 0 10.5 12V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4a.5.5 0 0 0 .537.082"/>
</svg>
      )}
    />
  );

export default CaretLeftSquare;

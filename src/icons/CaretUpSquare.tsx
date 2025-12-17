import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-up-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFIMmExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMXpNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNMy41NDQgMTAuNzA1QS41LjUgMCAwIDAgNCAxMWg4YS41LjUgMCAwIDAgLjM3NC0uODMybC00LTQuNWEuNS41IDAgMCAwLS43NDggMGwtNCA0LjVhLjUuNSAwIDAgMC0uMDgyLjUzNyIvPgo8L3N2Zz4=)*/
const CaretUpSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-up-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537"/>
</svg>
      )}
    />
  );

export default CaretUpSquare;

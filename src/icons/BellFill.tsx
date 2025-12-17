import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bell-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNmEyIDIgMCAwIDAgMi0ySDZhMiAyIDAgMCAwIDIgMm0uOTk1LTE0LjkwMWExIDEgMCAxIDAtMS45OSAwQTUgNSAwIDAgMCAzIDZjMCAxLjA5OC0uNSA2LTIgN2gxNGMtMS41LTEtMi01LjkwMi0yLTcgMC0yLjQyLTEuNzItNC40NC00LjAwNS00LjkwMSIvPgo8L3N2Zz4=)*/
const BellFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bell-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
</svg>
      )}
    />
  );

export default BellFill;

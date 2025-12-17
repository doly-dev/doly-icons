import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![printer-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAxYTIgMiAwIDAgMC0yIDJ2MWgxMFYzYTIgMiAwIDAgMC0yLTJ6bTYgOEg1YTEgMSAwIDAgMC0xIDF2M2ExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDEtMXYtM2ExIDEgMCAwIDAtMS0xIi8+CiAgPHBhdGggZD0iTTAgN2EyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2M2EyIDIgMCAwIDEtMiAyaC0xdi0yYTIgMiAwIDAgMC0yLTJINWEyIDIgMCAwIDAtMiAydjJIMmEyIDIgMCAwIDEtMi0yem0yLjUgMWEuNS41IDAgMSAwIDAtMSAuNS41IDAgMCAwIDAgMSIvPgo8L3N2Zz4=)*/
const PrinterFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="printer-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1"/>
  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
</svg>
      )}
    />
  );

export default PrinterFill;

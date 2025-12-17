import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-down-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy42MjYgNi44MzJBLjUuNSAwIDAgMSA0IDZoOGEuNS41IDAgMCAxIC4zNzQuODMybC00IDQuNWEuNS41IDAgMCAxLS43NDggMHoiLz4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptMTUgMGExIDEgMCAwIDAtMS0xSDJhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF6Ii8+Cjwvc3ZnPg==)*/
const CaretDownSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-down-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.626 6.832A.5.5 0 0 1 4 6h8a.5.5 0 0 1 .374.832l-4 4.5a.5.5 0 0 1-.748 0z"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default CaretDownSquare;

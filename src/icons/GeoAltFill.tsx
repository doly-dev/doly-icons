import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![geo-alt-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNnM2LTUuNjg2IDYtMTBBNiA2IDAgMCAwIDIgNmMwIDQuMzE0IDYgMTAgNiAxMG0wLTdhMyAzIDAgMSAxIDAtNiAzIDMgMCAwIDEgMCA2Ii8+Cjwvc3ZnPg==)*/
const GeoAltFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="geo-alt-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
      )}
    />
  );

export default GeoAltFill;

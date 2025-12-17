import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![toggle-off](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgNGE0IDQgMCAwIDEgMCA4SDhhNSA1IDAgMCAwIDItNCA1IDUgMCAwIDAtMi00em0tNiA4YTQgNCAwIDEgMSAwLTggNCA0IDAgMCAxIDAgOE0wIDhhNSA1IDAgMCAwIDUgNWg2YTUgNSAwIDAgMCAwLTEwSDVhNSA1IDAgMCAwLTUgNSIvPgo8L3N2Zz4=)*/
const ToggleOff: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="toggle-off"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/>
</svg>
      )}
    />
  );

export default ToggleOff;

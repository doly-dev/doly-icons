import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pause-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDMuNUExLjUgMS41IDAgMCAxIDcgNXY2YTEuNSAxLjUgMCAwIDEtMyAwVjVhMS41IDEuNSAwIDAgMSAxLjUtMS41bTUgMEExLjUgMS41IDAgMCAxIDEyIDV2NmExLjUgMS41IDAgMCAxLTMgMFY1YTEuNSAxLjUgMCAwIDEgMS41LTEuNSIvPgo8L3N2Zz4=)*/
const PauseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pause-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>
      )}
    />
  );

export default PauseFill;

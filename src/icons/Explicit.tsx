import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![explicit](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi44MjYgMTAuODhIMTAuNVYxMmgtNVY0LjAwMmg1djEuMTJINi44MjZWNy40aDMuNDU3djEuMDczSDYuODI2eiIvPgogIDxwYXRoIGQ9Ik0yLjUgMEEyLjUgMi41IDAgMCAwIDAgMi41djExQTIuNSAyLjUgMCAwIDAgMi41IDE2aDExYTIuNSAyLjUgMCAwIDAgMi41LTIuNXYtMTFBMi41IDIuNSAwIDAgMCAxMy41IDB6TTEgMi41QTEuNSAxLjUgMCAwIDEgMi41IDFoMTFBMS41IDEuNSAwIDAgMSAxNSAyLjV2MTFhMS41IDEuNSAwIDAgMS0xLjUgMS41aC0xMUExLjUgMS41IDAgMCAxIDEgMTMuNXoiLz4KPC9zdmc+)*/
const Explicit: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="explicit"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.826 10.88H10.5V12h-5V4.002h5v1.12H6.826V7.4h3.457v1.073H6.826z"/>
  <path d="M2.5 0A2.5 2.5 0 0 0 0 2.5v11A2.5 2.5 0 0 0 2.5 16h11a2.5 2.5 0 0 0 2.5-2.5v-11A2.5 2.5 0 0 0 13.5 0zM1 2.5A1.5 1.5 0 0 1 2.5 1h11A1.5 1.5 0 0 1 15 2.5v11a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 13.5z"/>
</svg>
      )}
    />
  );

export default Explicit;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![webcam-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi42NDQgMTEuMDk0YS41LjUgMCAwIDEgLjM1Ni0uMTVoMmEuNS41IDAgMCAxIC4zNTYuMTVjLjE3NS4xNzcuMzkuMzQ3LjYwMy40OTZhNyA3IDAgMCAwIC43NTIuNDU2bC4wMS4wMDZoLjAwM0EuNS41IDAgMCAxIDEwLjUgMTNoLTVhLjUuNSAwIDAgMS0uMjI0LS45NDdsLjAwMi0uMDAxLjAxLS4wMDZhNCA0IDAgMCAwIC4yMTQtLjExNiA4IDggMCAwIDAgLjUzOS0uMzRjLjIxNC0uMTUuNDI4LS4zMTkuNjAzLS40OTZNNyA2LjVhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwIi8+CiAgPHBhdGggZD0iTTIgM2EyIDIgMCAwIDAtMiAydjNhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjVhMiAyIDAgMCAwLTItMnptNiAxLjVhMiAyIDAgMSAxIDAgNCAyIDIgMCAwIDEgMC00TTEyLjUgN2EuNS41IDAgMSAxIDAtMSAuNS41IDAgMCAxIDAgMSIvPgo8L3N2Zz4=)*/
const WebcamFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="webcam-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.644 11.094a.5.5 0 0 1 .356-.15h2a.5.5 0 0 1 .356.15c.175.177.39.347.603.496a7 7 0 0 0 .752.456l.01.006h.003A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.224-.947l.002-.001.01-.006a4 4 0 0 0 .214-.116 8 8 0 0 0 .539-.34c.214-.15.428-.319.603-.496M7 6.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
  <path d="M2 3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm6 1.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12.5 7a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
</svg>
      )}
    />
  );

export default WebcamFill;

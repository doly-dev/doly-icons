import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![optical-audio-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA2YTMgMyAwIDEgMSAwIDYgMyAzIDAgMCAxIDAtNm0xIDNhMSAxIDAgMSAwLTIgMCAxIDEgMCAwIDAgMiAwIi8+CiAgPHBhdGggZD0iTTIuNSAxNWEuNS41IDAgMCAxLS41LS41di0zLjA1YTIuNSAyLjUgMCAwIDEgMC00LjlWNC41YS41LjUgMCAwIDEgLjE0Ni0uMzU0bDItMkEuNS41IDAgMCAxIDQuNSAyaDdhLjUuNSAwIDAgMSAuMzU0LjE0NmwyIDJBLjUuNSAwIDAgMSAxNCA0LjV2Mi4wNWEyLjUgMi41IDAgMCAxIDAgNC45djMuMDVhLjUuNSAwIDAgMS0uNS41ek04IDVhNCA0IDAgMSAwIDAgOCA0IDQgMCAwIDAgMC04Ii8+Cjwvc3ZnPg==)*/
const OpticalAudioFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="optical-audio-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 6a3 3 0 1 1 0 6 3 3 0 0 1 0-6m1 3a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
  <path d="M2.5 15a.5.5 0 0 1-.5-.5v-3.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 1 .146-.354l2-2A.5.5 0 0 1 4.5 2h7a.5.5 0 0 1 .354.146l2 2A.5.5 0 0 1 14 4.5v2.05a2.5 2.5 0 0 1 0 4.9v3.05a.5.5 0 0 1-.5.5zM8 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8"/>
</svg>
      )}
    />
  );

export default OpticalAudioFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![optical-audio](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxMGExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDIiLz4KICA8cGF0aCBkPSJNNC41IDlhMy41IDMuNSAwIDEgMSA3IDAgMy41IDMuNSAwIDAgMS03IDBNOCA2LjVhMi41IDIuNSAwIDEgMCAwIDUgMi41IDIuNSAwIDAgMCAwLTUiLz4KICA8cGF0aCBkPSJNMiAxNC41YS41LjUgMCAwIDAgLjUuNWgxMWEuNS41IDAgMCAwIC41LS41di0zLjA1YTIuNSAyLjUgMCAwIDAgMC00LjlWNC41YS41LjUgMCAwIDAtLjE0Ni0uMzU0bC0yLTJBLjUuNSAwIDAgMCAxMS41IDJoLTdhLjUuNSAwIDAgMC0uMzU0LjE0NmwtMiAyQS41LjUgMCAwIDAgMiA0LjV2Mi4wNWEyLjUgMi41IDAgMCAwIDAgNC45em0xLS41di0zYS41LjUgMCAwIDAtLjUtLjUgMS41IDEuNSAwIDEgMSAwLTNBLjUuNSAwIDAgMCAzIDdWNC43MDdMNC43MDcgM2g2LjU4NkwxMyA0LjcwN1Y3YS41LjUgMCAwIDAgLjUuNSAxLjUgMS41IDAgMCAxIDAgMyAuNS41IDAgMCAwLS41LjV2M3oiLz4KPC9zdmc+)*/
const OpticalAudio: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="optical-audio"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="M4.5 9a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0M8 6.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5"/>
  <path d="M2 14.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-3.05a2.5 2.5 0 0 0 0-4.9V4.5a.5.5 0 0 0-.146-.354l-2-2A.5.5 0 0 0 11.5 2h-7a.5.5 0 0 0-.354.146l-2 2A.5.5 0 0 0 2 4.5v2.05a2.5 2.5 0 0 0 0 4.9zm1-.5v-3a.5.5 0 0 0-.5-.5 1.5 1.5 0 1 1 0-3A.5.5 0 0 0 3 7V4.707L4.707 3h6.586L13 4.707V7a.5.5 0 0 0 .5.5 1.5 1.5 0 0 1 0 3 .5.5 0 0 0-.5.5v3z"/>
</svg>
      )}
    />
  );

export default OpticalAudio;

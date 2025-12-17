import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![trash-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDFhMSAxIDAgMCAwLTEgMXYxYTEgMSAwIDAgMCAxIDFIM3Y5YTIgMiAwIDAgMCAyIDJoNmEyIDIgMCAwIDAgMi0yVjRoLjVhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTFIMTBhMSAxIDAgMCAwLTEtMUg3YTEgMSAwIDAgMC0xIDF6bTMgNGEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLTEgMHYtN2EuNS41IDAgMCAxIC41LS41TTggNWEuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLTEgMHYtN0EuNS41IDAgMCAxIDggNW0zIC41djdhLjUuNSAwIDAgMS0xIDB2LTdhLjUuNSAwIDAgMSAxIDAiLz4KPC9zdmc+)*/
const TrashFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="trash-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default TrashFill;

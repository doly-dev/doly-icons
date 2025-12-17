import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pause-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTYuMjUgNUM1LjU2IDUgNSA1LjU2IDUgNi4yNXYzLjVhMS4yNSAxLjI1IDAgMSAwIDIuNSAwdi0zLjVDNy41IDUuNTYgNi45NCA1IDYuMjUgNW0zLjUgMGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2My41YTEuMjUgMS4yNSAwIDEgMCAyLjUgMHYtMy41QzExIDUuNTYgMTAuNDQgNSA5Ljc1IDUiLz4KPC9zdmc+)*/
const PauseCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pause-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
</svg>
      )}
    />
  );

export default PauseCircleFill;

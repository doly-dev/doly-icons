import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pause-btn-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMlY0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0ybTYuMjUtN0M1LjU2IDUgNSA1LjU2IDUgNi4yNXYzLjVhMS4yNSAxLjI1IDAgMSAwIDIuNSAwdi0zLjVDNy41IDUuNTYgNi45NCA1IDYuMjUgNW0zLjUgMGMtLjY5IDAtMS4yNS41Ni0xLjI1IDEuMjV2My41YTEuMjUgMS4yNSAwIDEgMCAyLjUgMHYtMy41QzExIDUuNTYgMTAuNDQgNSA5Ljc1IDUiLz4KPC9zdmc+)*/
const PauseBtnFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pause-btn-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 12V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m6.25-7C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5m3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5"/>
</svg>
      )}
    />
  );

export default PauseBtnFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![valentine](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA1Ljk5M2MxLjY2NC0xLjcxMSA1LjgyNSAxLjI4MyAwIDUuMTMyLTUuODI1LTMuODUtMS42NjQtNi44NDMgMC01LjEzMk0yLjI1IDRhLjI1LjI1IDAgMCAwLS4yNS4yNXYxLjVhLjI1LjI1IDAgMCAwIC41IDBWNC41aDEuMjVhLjI1LjI1IDAgMCAwIDAtLjV6bTEwIDBhLjI1LjI1IDAgMSAwIDAgLjVoMS4yNXYxLjI1YS4yNS4yNSAwIDEgMCAuNSAwdi0xLjVhLjI1LjI1IDAgMCAwLS4yNS0uMjV6TTIuNSAxMC4yNWEuMjUuMjUgMCAxIDAtLjUgMHYxLjVjMCAuMTM4LjExMi4yNS4yNS4yNWgxLjVhLjI1LjI1IDAgMSAwIDAtLjVIMi41em0xMS41IDBhLjI1LjI1IDAgMSAwLS41IDB2MS4yNWgtMS4yNWEuMjUuMjUgMCAxIDAgMCAuNWgxLjVhLjI1LjI1IDAgMCAwIC4yNS0uMjV6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAyLjk5NHYtLjA2YTEgMSAwIDAgMSAuODU5LS45OWwxMy0xLjg1N2ExIDEgMCAwIDEgMS4xNDEuOTlWMmExIDEgMCAwIDEgMSAxdjEwYTEgMSAwIDAgMS0xIDFIMWExIDEgMCAwIDEtMS0xek0xIDN2MTBoMTRWM3oiLz4KPC9zdmc+)*/
const Valentine: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="valentine"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132M2.25 4a.25.25 0 0 0-.25.25v1.5a.25.25 0 0 0 .5 0V4.5h1.25a.25.25 0 0 0 0-.5zm10 0a.25.25 0 1 0 0 .5h1.25v1.25a.25.25 0 1 0 .5 0v-1.5a.25.25 0 0 0-.25-.25zM2.5 10.25a.25.25 0 1 0-.5 0v1.5c0 .138.112.25.25.25h1.5a.25.25 0 1 0 0-.5H2.5zm11.5 0a.25.25 0 1 0-.5 0v1.25h-1.25a.25.25 0 1 0 0 .5h1.5a.25.25 0 0 0 .25-.25z"/>
  <path fillRule="evenodd" d="M0 2.994v-.06a1 1 0 0 1 .859-.99l13-1.857a1 1 0 0 1 1.141.99V2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zM1 3v10h14V3z"/>
</svg>
      )}
    />
  );

export default Valentine;

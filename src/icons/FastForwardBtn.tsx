import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![fast-forward-btn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC43OSA1LjA5M0EuNS41IDAgMCAwIDggNS41djEuODg2TDQuNzkgNS4wOTNBLjUuNSAwIDAgMCA0IDUuNXY1YS41LjUgMCAwIDAgLjc5LjQwN0w4IDguNjE0VjEwLjVhLjUuNSAwIDAgMCAuNzkuNDA3bDMuNS0yLjVhLjUuNSAwIDAgMCAwLS44MTR6Ii8+CiAgPHBhdGggZD0iTTAgNGEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptMTUgMGExIDEgMCAwIDAtMS0xSDJhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXoiLz4KPC9zdmc+)*/
const FastForwardBtn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="fast-forward-btn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.79 5.093A.5.5 0 0 0 8 5.5v1.886L4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L8 8.614V10.5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default FastForwardBtn;

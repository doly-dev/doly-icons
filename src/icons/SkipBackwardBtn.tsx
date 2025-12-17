import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-backward-btn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuMjEgNS4wOTNBLjUuNSAwIDAgMSAxMiA1LjV2NWEuNS41IDAgMCAxLS43OS40MDdMOC41IDguOTcyVjEwLjVhLjUuNSAwIDAgMS0uNzkuNDA3TDUgOC45NzJWMTAuNWEuNS41IDAgMCAxLTEgMHYtNWEuNS41IDAgMCAxIDEgMHYxLjUyOGwyLjcxLTEuOTM1YS41LjUgMCAwIDEgLjc5LjQwN3YxLjUyOHoiLz4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0xNSAwYTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjhhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xeiIvPgo8L3N2Zz4=)*/
const SkipBackwardBtn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-backward-btn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.21 5.093A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8.5 8.972V10.5a.5.5 0 0 1-.79.407L5 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528l2.71-1.935a.5.5 0 0 1 .79.407v1.528z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default SkipBackwardBtn;

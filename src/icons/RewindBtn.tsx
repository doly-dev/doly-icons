import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rewind-btn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yMSA1LjA5M0EuNS41IDAgMCAxIDggNS41djEuODg2bDMuMjEtMi4yOTNBLjUuNSAwIDAgMSAxMiA1LjV2NWEuNS41IDAgMCAxLS43OS40MDdMOCA4LjYxNFYxMC41YS41LjUgMCAwIDEtLjc5LjQwN2wtMy41LTIuNWEuNS41IDAgMCAxIDAtLjgxNHoiLz4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0xNSAwYTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjhhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xeiIvPgo8L3N2Zz4=)*/
const RewindBtn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rewind-btn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.21 5.093A.5.5 0 0 1 8 5.5v1.886l3.21-2.293A.5.5 0 0 1 12 5.5v5a.5.5 0 0 1-.79.407L8 8.614V10.5a.5.5 0 0 1-.79.407l-3.5-2.5a.5.5 0 0 1 0-.814z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default RewindBtn;

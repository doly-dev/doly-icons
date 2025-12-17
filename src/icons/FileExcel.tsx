import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-excel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4xOCA0LjYxNmEuNS41IDAgMCAxIC43MDQuMDY0TDggNy4yMTlsMi4xMTYtMi41NGEuNS41IDAgMSAxIC43NjguNjQxTDguNjUxIDhsMi4yMzMgMi42OGEuNS41IDAgMCAxLS43NjguNjRMOCA4Ljc4MWwtMi4xMTYgMi41NGEuNS41IDAgMCAxLS43NjgtLjY0MUw3LjM0OSA4IDUuMTE2IDUuMzJhLjUuNSAwIDAgMSAuMDY0LS43MDQiLz4KICA8cGF0aCBkPSJNNCAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yem0wIDFoOGExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMSIvPgo8L3N2Zz4=)*/
const FileExcel: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-excel"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileExcel;

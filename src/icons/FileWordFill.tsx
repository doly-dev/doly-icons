import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-word-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTUuNDg1IDQuODc5bDEuMDM2IDQuMTQ0Ljk5Ny0zLjY1NWEuNS41IDAgMCAxIC45NjQgMGwuOTk3IDMuNjU1IDEuMDM2LTQuMTQ0YS41LjUgMCAwIDEgLjk3LjI0MmwtMS41IDZhLjUuNSAwIDAgMS0uOTY3LjAxTDggNy40MDJsLTEuMDE4IDMuNzNhLjUuNSAwIDAgMS0uOTY3LS4wMWwtMS41LTZhLjUuNSAwIDEgMSAuOTctLjI0MnoiLz4KPC9zdmc+)*/
const FileWordFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-word-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5.485 4.879l1.036 4.144.997-3.655a.5.5 0 0 1 .964 0l.997 3.655 1.036-4.144a.5.5 0 0 1 .97.242l-1.5 6a.5.5 0 0 1-.967.01L8 7.402l-1.018 3.73a.5.5 0 0 1-.967-.01l-1.5-6a.5.5 0 1 1 .97-.242z"/>
</svg>
      )}
    />
  );

export default FileWordFill;

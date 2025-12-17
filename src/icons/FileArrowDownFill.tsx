import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-arrow-down-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTggNWEuNS41IDAgMCAxIC41LjV2My43OTNsMS4xNDYtMS4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtMiAyYS41LjUgMCAwIDEtLjcwOCAwbC0yLTJhLjUuNSAwIDEgMSAuNzA4LS43MDhMNy41IDkuMjkzVjUuNUEuNS41IDAgMCAxIDggNSIvPgo8L3N2Zz4=)*/
const FileArrowDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-arrow-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5"/>
</svg>
      )}
    />
  );

export default FileArrowDownFill;

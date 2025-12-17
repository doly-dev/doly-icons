import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-text-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTUgNGg2YS41LjUgMCAwIDEgMCAxSDVhLjUuNSAwIDAgMSAwLTFtLS41IDIuNUEuNS41IDAgMCAxIDUgNmg2YS41LjUgMCAwIDEgMCAxSDVhLjUuNSAwIDAgMS0uNS0uNU01IDhoNmEuNS41IDAgMCAxIDAgMUg1YS41LjUgMCAwIDEgMC0xbTAgMmgzYS41LjUgMCAwIDEgMCAxSDVhLjUuNSAwIDAgMSAwLTEiLz4KPC9zdmc+)*/
const FileTextFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-text-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5M5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default FileTextFill;

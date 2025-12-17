import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-check-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ybS0xLjE0NiA2Ljg1NC0zIDNhLjUuNSAwIDAgMS0uNzA4IDBsLTEuNS0xLjVhLjUuNSAwIDEgMSAuNzA4LS43MDhMNy41IDguNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDgiLz4KPC9zdmc+)*/
const FileCheckFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-check-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-1.146 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708.708"/>
</svg>
      )}
    />
  );

export default FileCheckFill;

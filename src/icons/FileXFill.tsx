import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-x-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTYuODU0IDYuMTQ2IDggNy4yOTNsMS4xNDYtMS4xNDdhLjUuNSAwIDEgMSAuNzA4LjcwOEw4LjcwNyA4bDEuMTQ3IDEuMTQ2YS41LjUgMCAwIDEtLjcwOC43MDhMOCA4LjcwNyA2Ljg1NCA5Ljg1NGEuNS41IDAgMCAxLS43MDgtLjcwOEw3LjI5MyA4IDYuMTQ2IDYuODU0YS41LjUgMCAxIDEgLjcwOC0uNzA4Ii8+Cjwvc3ZnPg==)*/
const FileXFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-x-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6.854 6.146 8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 1 1 .708-.708"/>
</svg>
      )}
    />
  );

export default FileXFill;

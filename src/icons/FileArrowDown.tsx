import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA1YS41LjUgMCAwIDEgLjUuNXYzLjc5M2wxLjE0Ni0xLjE0N2EuNS41IDAgMCAxIC43MDguNzA4bC0yIDJhLjUuNSAwIDAgMS0uNzA4IDBsLTItMmEuNS41IDAgMSAxIC43MDgtLjcwOEw3LjUgOS4yOTNWNS41QS41LjUgMCAwIDEgOCA1Ii8+CiAgPHBhdGggZD0iTTQgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptMCAxaDhhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTEiLz4KPC9zdmc+)*/
const FileArrowDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-arrow-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileArrowDown;

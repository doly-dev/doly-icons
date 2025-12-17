import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![files-alt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgMEgzYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTIgMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTIgMiAyIDAgMCAwLTItMm0yIDNhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDF6TTIgMmExIDEgMCAwIDEgMS0xaDhhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const FilesAlt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="files-alt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 0H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2 2 2 0 0 0 2-2V4a2 2 0 0 0-2-2 2 2 0 0 0-2-2m2 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1zM2 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default FilesAlt;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-diff-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4yOTMgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWNC43MDdBMSAxIDAgMCAwIDEzLjcwNyA0TDEwIC4yOTNBMSAxIDAgMCAwIDkuMjkzIDBNOS41IDMuNXYtMmwzIDNoLTJhMSAxIDAgMCAxLTEtMU04IDZhLjUuNSAwIDAgMSAuNS41VjhIMTBhLjUuNSAwIDAgMSAwIDFIOC41djEuNWEuNS41IDAgMCAxLTEgMFY5SDZhLjUuNSAwIDAgMSAwLTFoMS41VjYuNUEuNS41IDAgMCAxIDggNm0tMi41IDYuNUEuNS41IDAgMCAxIDYgMTJoNGEuNS41IDAgMCAxIDAgMUg2YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const FileEarmarkDiffFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-diff-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8 6a.5.5 0 0 1 .5.5V8H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V9H6a.5.5 0 0 1 0-1h1.5V6.5A.5.5 0 0 1 8 6m-2.5 6.5A.5.5 0 0 1 6 12h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default FileEarmarkDiffFill;

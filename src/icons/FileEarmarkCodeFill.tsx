import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-code-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4yOTMgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWNC43MDdBMSAxIDAgMCAwIDEzLjcwNyA0TDEwIC4yOTNBMSAxIDAgMCAwIDkuMjkzIDBNOS41IDMuNXYtMmwzIDNoLTJhMSAxIDAgMCAxLTEtMU02LjY0NiA3LjY0NmEuNS41IDAgMSAxIC43MDguNzA4TDUuNzA3IDEwbDEuNjQ3IDEuNjQ2YS41LjUgMCAwIDEtLjcwOC43MDhsLTItMmEuNS41IDAgMCAxIDAtLjcwOHptMi43MDggMCAyIDJhLjUuNSAwIDAgMSAwIC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgMTAgOC42NDYgOC4zNTRhLjUuNSAwIDEgMSAuNzA4LS43MDgiLz4KPC9zdmc+)*/
const FileEarmarkCodeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-code-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708"/>
</svg>
      )}
    />
  );

export default FileEarmarkCodeFill;

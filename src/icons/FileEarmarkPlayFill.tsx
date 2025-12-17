import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-play-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4yOTMgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWNC43MDdBMSAxIDAgMCAwIDEzLjcwNyA0TDEwIC4yOTNBMSAxIDAgMCAwIDkuMjkzIDBNOS41IDMuNXYtMmwzIDNoLTJhMSAxIDAgMCAxLTEtMU02IDYuODgzYS41LjUgMCAwIDEgLjc1Ny0uNDI5bDMuNTI4IDIuMTE3YS41LjUgMCAwIDEgMCAuODU4bC0zLjUyOCAyLjExN2EuNS41IDAgMCAxLS43NTctLjQzVjYuODg0eiIvPgo8L3N2Zz4=)*/
const FileEarmarkPlayFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-play-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M6 6.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V6.884z"/>
</svg>
      )}
    />
  );

export default FileEarmarkPlayFill;

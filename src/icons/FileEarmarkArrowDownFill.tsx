import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-arrow-down-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4yOTMgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWNC43MDdBMSAxIDAgMCAwIDEzLjcwNyA0TDEwIC4yOTNBMSAxIDAgMCAwIDkuMjkzIDBNOS41IDMuNXYtMmwzIDNoLTJhMSAxIDAgMCAxLTEtMW0tMSA0djMuNzkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDggMGwtMi0yYS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxMS4yOTNWNy41YS41LjUgMCAwIDEgMSAwIi8+Cjwvc3ZnPg==)*/
const FileEarmarkArrowDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-arrow-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1m-1 4v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 11.293V7.5a.5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default FileEarmarkArrowDownFill;

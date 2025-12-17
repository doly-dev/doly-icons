import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-spreadsheet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMTRWNC41TDkuNSAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMk05LjUgM0ExLjUgMS41IDAgMCAwIDExIDQuNWgyVjlIM1YyYTEgMSAwIDAgMSAxLTFoNS41ek0zIDEydi0yaDJ2MnptMCAxaDJ2Mkg0YTEgMSAwIDAgMS0xLTF6bTMgMnYtMmgzdjJ6bTQgMHYtMmgzdjFhMSAxIDAgMCAxLTEgMXptMy0zaC0zdi0yaDN6bS03IDB2LTJoM3YyeiIvPgo8L3N2Zz4=)*/
const FileEarmarkSpreadsheet: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-spreadsheet"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h3v2zm4 0v-2h3v1a1 1 0 0 1-1 1zm3-3h-3v-2h3zm-7 0v-2h3v2z"/>
</svg>
      )}
    />
  );

export default FileEarmarkSpreadsheet;

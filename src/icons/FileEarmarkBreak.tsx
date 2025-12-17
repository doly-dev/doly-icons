import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-break](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgNC41VjloLTFWNC41aC0yQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2N0gyVjJhMiAyIDAgMCAxIDItMmg1LjV6TTEzIDEyaDF2MmEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnYtMmgxdjJhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTF6TS41IDEwYS41LjUgMCAwIDAgMCAxaDE1YS41LjUgMCAwIDAgMC0xeiIvPgo8L3N2Zz4=)*/
const FileEarmarkBreak: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-break"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 4.5V9h-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v7H2V2a2 2 0 0 1 2-2h5.5zM13 12h1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2h1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default FileEarmarkBreak;

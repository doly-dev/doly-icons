import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-spreadsheet-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxMnYtMmgzdjJ6Ii8+CiAgPHBhdGggZD0iTTkuMjkzIDBINGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjQuNzA3QTEgMSAwIDAgMCAxMy43MDcgNEwxMCAuMjkzQTEgMSAwIDAgMCA5LjI5MyAwTTkuNSAzLjV2LTJsMyAzaC0yYTEgMSAwIDAgMS0xLTFNMyA5aDEwdjFoLTN2MmgzdjFoLTN2Mkg5di0ySDZ2Mkg1di0ySDN2LTFoMnYtMkgzeiIvPgo8L3N2Zz4=)*/
const FileEarmarkSpreadsheetFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-spreadsheet-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 12v-2h3v2z"/>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M3 9h10v1h-3v2h3v1h-3v2H9v-2H6v2H5v-2H3v-1h2v-2H3z"/>
</svg>
      )}
    />
  );

export default FileEarmarkSpreadsheetFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-spreadsheet](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXY0aDEwVjJhMSAxIDAgMCAwLTEtMXptOSA2aC0zdjJoM3ptMCAzaC0zdjJoM3ptMCAzaC0zdjJoMmExIDEgMCAwIDAgMS0xem0tNCAydi0ySDZ2MnptLTQgMHYtMkgzdjFhMSAxIDAgMCAwIDEgMXptLTItM2gydi0ySDN6bTAtM2gyVjdIM3ptMy0ydjJoM1Y3em0zIDNINnYyaDN6Ii8+Cjwvc3ZnPg==)*/
const FileSpreadsheet: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-spreadsheet"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1zm9 6h-3v2h3zm0 3h-3v2h3zm0 3h-3v2h2a1 1 0 0 0 1-1zm-4 2v-2H6v2zm-4 0v-2H3v1a1 1 0 0 0 1 1zm-2-3h2v-2H3zm0-3h2V7H3zm3-2v2h3V7zm3 3H6v2h3z"/>
</svg>
      )}
    />
  );

export default FileSpreadsheet;

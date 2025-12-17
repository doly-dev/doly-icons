import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-spreadsheet-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2NGgxMlYyYTIgMiAwIDAgMC0yLTJtMiA3aC00djJoNHptMCAzaC00djJoNHptMCAzaC00djNoMmEyIDIgMCAwIDAgMi0yem0tNSAzdi0zSDZ2M3ptLTQgMHYtM0gydjFhMiAyIDAgMCAwIDIgMnptLTMtNGgzdi0ySDJ6bTAtM2gzVjdIMnptNCAwVjdoM3Yyem0wIDFoM3YySDZ6Ii8+Cjwvc3ZnPg==)*/
const FileSpreadsheetFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-spreadsheet-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7h-4v2h4zm0 3h-4v2h4zm0 3h-4v3h2a2 2 0 0 0 2-2zm-5 3v-3H6v3zm-4 0v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2zm4 0V7h3v2zm0 1h3v2H6z"/>
</svg>
      )}
    />
  );

export default FileSpreadsheetFill;

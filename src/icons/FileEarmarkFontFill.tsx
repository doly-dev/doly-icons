import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-font-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4yOTMgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWNC43MDdBMSAxIDAgMCAwIDEzLjcwNyA0TDEwIC4yOTNBMSAxIDAgMCAwIDkuMjkzIDBNOS41IDMuNXYtMmwzIDNoLTJhMSAxIDAgMCAxLTEtMU01LjA1NyA2aDUuODg2TDExIDhoLS41Yy0uMTgtMS4wOTYtLjM1Ni0xLjE5Mi0xLjY5NC0xLjIzNWwtLjI5OC0uMDF2NS4wOWMwIC40Ny4xLjU4Mi45MDMuNjU1di41SDYuNTl2LS41Yy43OTktLjA3My44OTgtLjE4NC44OTgtLjY1NFY2Ljc1NWwtLjI5My4wMUM1Ljg1NiA2LjgwOCA1LjY4IDYuOTA1IDUuNSA4SDV6Ii8+Cjwvc3ZnPg==)*/
const FileEarmarkFontFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-font-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M5.057 6h5.886L11 8h-.5c-.18-1.096-.356-1.192-1.694-1.235l-.298-.01v5.09c0 .47.1.582.903.655v.5H6.59v-.5c.799-.073.898-.184.898-.654V6.755l-.293.01C5.856 6.808 5.68 6.905 5.5 8H5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkFontFill;

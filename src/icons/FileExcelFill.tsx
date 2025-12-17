import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-excel-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTUuODg0IDQuNjggOCA3LjIxOWwyLjExNi0yLjU0YS41LjUgMCAxIDEgLjc2OC42NDFMOC42NTEgOGwyLjIzMyAyLjY4YS41LjUgMCAwIDEtLjc2OC42NEw4IDguNzgxbC0yLjExNiAyLjU0YS41LjUgMCAwIDEtLjc2OC0uNjQxTDcuMzQ5IDggNS4xMTYgNS4zMmEuNS41IDAgMSAxIC43NjgtLjY0Ii8+Cjwvc3ZnPg==)*/
const FileExcelFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-excel-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5.884 4.68 8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 1 1 .768-.64"/>
</svg>
      )}
    />
  );

export default FileExcelFill;

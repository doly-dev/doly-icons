import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-excel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS44ODQgNi42OGEuNS41IDAgMSAwLS43NjguNjRMNy4zNDkgMTBsLTIuMjMzIDIuNjhhLjUuNSAwIDAgMCAuNzY4LjY0TDggMTAuNzgxbDIuMTE2IDIuNTRhLjUuNSAwIDAgMCAuNzY4LS42NDFMOC42NTEgMTBsMi4yMzMtMi42OGEuNS41IDAgMCAwLS43NjgtLjY0TDggOS4yMTlsLTIuMTE2LTIuNTR6Ii8+CiAgPHBhdGggZD0iTTE0IDE0VjQuNUw5LjUgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJNOS41IDNBMS41IDEuNSAwIDAgMCAxMSA0LjVoMlYxNGExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoNS41eiIvPgo8L3N2Zz4=)*/
const FileEarmarkExcel: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-excel"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkExcel;

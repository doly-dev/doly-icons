import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-ppt](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA1LjVhMSAxIDAgMCAwLTEgMVYxM2EuNS41IDAgMCAwIDEgMHYtMmgxLjE4OGEyLjc1IDIuNzUgMCAwIDAgMC01LjV6TTguMTg4IDEwSDdWNi41aDEuMTg4YTEuNzUgMS43NSAwIDEgMSAwIDMuNSIvPgogIDxwYXRoIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJWMmEyIDIgMCAwIDEgMi0yaDUuNXptLTMgMEExLjUgMS41IDAgMCAxIDkuNSAzVjFINGExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xVjQuNXoiLz4KPC9zdmc+)*/
const FileEarmarkPpt: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-ppt"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 5.5a1 1 0 0 0-1 1V13a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5zM8.188 10H7V6.5h1.188a1.75 1.75 0 1 1 0 3.5"/>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkPpt;

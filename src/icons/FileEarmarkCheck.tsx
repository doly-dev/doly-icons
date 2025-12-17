import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuODU0IDcuODU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDcuNSA5Ljc5MyA2LjM1NCA4LjY0NmEuNS41IDAgMSAwLS43MDguNzA4bDEuNSAxLjVhLjUuNSAwIDAgMCAuNzA4IDB6Ii8+CiAgPHBhdGggZD0iTTE0IDE0VjQuNUw5LjUgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJNOS41IDNBMS41IDEuNSAwIDAgMCAxMSA0LjVoMlYxNGExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTFoNS41eiIvPgo8L3N2Zz4=)*/
const FileEarmarkCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkCheck;

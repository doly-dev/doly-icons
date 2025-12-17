import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgNC41VjE0YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmg1LjV6bS0zIDBBMS41IDEuNSAwIDAgMSA5LjUgM1YxSDRhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVY0LjV6Ii8+CiAgPHBhdGggZD0iTTguNjQ2IDYuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDIgMmEuNS41IDAgMCAxIDAgLjcwOGwtMiAyYS41LjUgMCAwIDEtLjcwOC0uNzA4TDEwLjI5MyA5IDguNjQ2IDcuMzU0YS41LjUgMCAwIDEgMC0uNzA4bS0xLjI5MiAwYS41LjUgMCAwIDAtLjcwOCAwbC0yIDJhLjUuNSAwIDAgMCAwIC43MDhsMiAyYS41LjUgMCAwIDAgLjcwOC0uNzA4TDUuNzA3IDlsMS42NDctMS42NDZhLjUuNSAwIDAgMCAwLS43MDgiLz4KPC9zdmc+)*/
const FileEarmarkCode: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-code"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
  <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708"/>
</svg>
      )}
    />
  );

export default FileEarmarkCode;

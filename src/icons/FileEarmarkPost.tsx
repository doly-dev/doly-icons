import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-post](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgNC41VjE0YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmg1LjV6bS0zIDBBMS41IDEuNSAwIDAgMSA5LjUgM1YxSDRhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVY0LjV6Ii8+CiAgPHBhdGggZD0iTTQgNi41YS41LjUgMCAwIDEgLjUtLjVoN2EuNS41IDAgMCAxIC41LjV2N2EuNS41IDAgMCAxLS41LjVoLTdhLjUuNSAwIDAgMS0uNS0uNXptMC0zYS41LjUgMCAwIDEgLjUtLjVIN2EuNS41IDAgMCAxIDAgMUg0LjVhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const FileEarmarkPost: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-post"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
  <path d="M4 6.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5H7a.5.5 0 0 1 0 1H4.5a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default FileEarmarkPost;

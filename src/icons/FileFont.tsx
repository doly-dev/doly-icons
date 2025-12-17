import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-font](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuOTQzIDRINS4wNTdMNSA2aC41Yy4xOC0xLjA5Ni4zNTYtMS4xOTIgMS42OTQtMS4yMzVsLjI5My0uMDF2Ni4wOWMwIC40Ny0uMS41ODItLjg5OC42NTV2LjVIOS40MXYtLjVjLS44MDMtLjA3My0uOTAzLS4xODQtLjkwMy0uNjU0VjQuNzU1bC4yOTguMDFjMS4zMzguMDQzIDEuNTE0LjE0IDEuNjk0IDEuMjM1aC41bC0uMDU3LTJ6Ii8+CiAgPHBhdGggZD0iTTQgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptMCAxaDhhMSAxIDAgMCAxIDEgMXYxMmExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTEiLz4KPC9zdmc+)*/
const FileFont: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-font"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.943 4H5.057L5 6h.5c.18-1.096.356-1.192 1.694-1.235l.293-.01v6.09c0 .47-.1.582-.898.655v.5H9.41v-.5c-.803-.073-.903-.184-.903-.654V4.755l.298.01c1.338.043 1.514.14 1.694 1.235h.5l-.057-2z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileFont;

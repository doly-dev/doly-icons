import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-richtext](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgNC41VjE0YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yVjJhMiAyIDAgMCAxIDItMmg1LjV6bS0zIDBBMS41IDEuNSAwIDAgMSA5LjUgM1YxSDRhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVY0LjV6Ii8+CiAgPHBhdGggZD0iTTQuNSAxMi41QS41LjUgMCAwIDEgNSAxMmgzYS41LjUgMCAwIDEgMCAxSDVhLjUuNSAwIDAgMS0uNS0uNW0wLTJBLjUuNSAwIDAgMSA1IDEwaDZhLjUuNSAwIDAgMSAwIDFINWEuNS41IDAgMCAxLS41LS41bTEuNjM5LTMuNzA4IDEuMzMuODg2IDEuODU0LTEuODU1YS4yNS4yNSAwIDAgMSAuMjg5LS4wNDdsMS44ODguOTc0VjguNWEuNS41IDAgMCAxLS41LjVINWEuNS41IDAgMCAxLS41LS41VjhzMS41NC0xLjI3NCAxLjYzOS0xLjIwOE02LjI1IDZhLjc1Ljc1IDAgMSAwIDAtMS41Ljc1Ljc1IDAgMCAwIDAgMS41Ii8+Cjwvc3ZnPg==)*/
const FileEarmarkRichtext: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-richtext"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"/>
  <path d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208M6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"/>
</svg>
      )}
    />
  );

export default FileEarmarkRichtext;

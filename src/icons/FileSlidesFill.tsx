import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-slides-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA3Ljc4VjUuMjJjMC0uMDk2LjEwNi0uMTU2LjE5LS4xMDZsMi4xMyAxLjI3OWEuMTI1LjEyNSAwIDAgMSAwIC4yMTRsLTIuMTMgMS4yOEEuMTI1LjEyNSAwIDAgMSA3IDcuNzc4eiIvPgogIDxwYXRoIGQ9Ik0xMiAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJNNSA0aDZhLjUuNSAwIDAgMSAuNDk2LjQzOGwuNSA0QS41LjUgMCAwIDEgMTEuNSA5aC0zdjIuMDE2Yy44NjMuMDU1IDEuNS4yNTEgMS41LjQ4NCAwIC4yNzYtLjg5NS41LTIgLjVzLTItLjIyNC0yLS41YzAtLjIzMy42MzctLjQyOSAxLjUtLjQ4NFY5aC0zYS41LjUgMCAwIDEtLjQ5Ni0uNTYybC41LTRBLjUuNSAwIDAgMSA1IDQiLz4KPC9zdmc+)*/
const FileSlidesFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-slides-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 7.78V5.22c0-.096.106-.156.19-.106l2.13 1.279a.125.125 0 0 1 0 .214l-2.13 1.28A.125.125 0 0 1 7 7.778z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5 4h6a.5.5 0 0 1 .496.438l.5 4A.5.5 0 0 1 11.5 9h-3v2.016c.863.055 1.5.251 1.5.484 0 .276-.895.5-2 .5s-2-.224-2-.5c0-.233.637-.429 1.5-.484V9h-3a.5.5 0 0 1-.496-.562l.5-4A.5.5 0 0 1 5 4"/>
</svg>
      )}
    />
  );

export default FileSlidesFill;

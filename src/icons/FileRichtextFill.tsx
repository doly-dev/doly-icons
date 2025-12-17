import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-richtext-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTcgNC4yNWEuNzUuNzUgMCAxIDEtMS41IDAgLjc1Ljc1IDAgMCAxIDEuNSAwbS0uODYxIDEuNTQyIDEuMzMuODg2IDEuODU0LTEuODU1YS4yNS4yNSAwIDAgMSAuMjg5LS4wNDdsMS44ODguOTc0VjcuNWEuNS41IDAgMCAxLS41LjVINWEuNS41IDAgMCAxLS41LS41VjdzMS41NC0xLjI3NCAxLjYzOS0xLjIwOE01IDloNmEuNS41IDAgMCAxIDAgMUg1YS41LjUgMCAwIDEgMC0xbTAgMmgzYS41LjUgMCAwIDEgMCAxSDVhLjUuNSAwIDAgMSAwLTEiLz4KPC9zdmc+)*/
const FileRichtextFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-richtext-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M7 4.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V7.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V7s1.54-1.274 1.639-1.208M5 9h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1m0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default FileRichtextFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-easel-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSA2LjVhLjUuNSAwIDAgMSAuNS0uNWg1YS41LjUgMCAwIDEgLjUuNXYyYS41LjUgMCAwIDEtLjUuNWgtNWEuNS41IDAgMCAxLS41LS41eiIvPgogIDxwYXRoIGQ9Ik0xMiAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJNOC41IDVoMkExLjUgMS41IDAgMCAxIDEyIDYuNXYyYTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtLjQ3M2wuNDQ3IDEuMzQyYS41LjUgMCAwIDEtLjk0OC4zMTZMOC45NzMgMTBIOC41djFhLjUuNSAwIDAgMS0xIDB2LTFoLS40NzNsLS41NTMgMS42NThhLjUuNSAwIDEgMS0uOTQ4LS4zMTZMNS45NzMgMTBINS41QTEuNSAxLjUgMCAwIDEgNCA4LjV2LTJBMS41IDEuNSAwIDAgMSA1LjUgNWgyYS41LjUgMCAwIDEgMSAwIi8+Cjwvc3ZnPg==)*/
const FileEaselFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-easel-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M8.5 5h2A1.5 1.5 0 0 1 12 6.5v2a1.5 1.5 0 0 1-1.5 1.5h-.473l.447 1.342a.5.5 0 0 1-.948.316L8.973 10H8.5v1a.5.5 0 0 1-1 0v-1h-.473l-.553 1.658a.5.5 0 1 1-.948-.316L5.973 10H5.5A1.5 1.5 0 0 1 4 8.5v-2A1.5 1.5 0 0 1 5.5 5h2a.5.5 0 0 1 1 0"/>
</svg>
      )}
    />
  );

export default FileEaselFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-easel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDVhLjUuNSAwIDEgMC0xIDBoLTJBMS41IDEuNSAwIDAgMCA0IDYuNXYyQTEuNSAxLjUgMCAwIDAgNS41IDEwaC40NzNsLS40NDcgMS4zNDJhLjUuNSAwIDEgMCAuOTQ4LjMxNkw3LjAyNyAxMEg3LjV2MWEuNS41IDAgMCAwIDEgMHYtMWguNDczbC41NTMgMS42NThhLjUuNSAwIDEgMCAuOTQ4LS4zMTZMMTAuMDI3IDEwaC40NzNBMS41IDEuNSAwIDAgMCAxMiA4LjV2LTJBMS41IDEuNSAwIDAgMCAxMC41IDV6TTUgNi41YS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIC41LjV2MmEuNS41IDAgMCAxLS41LjVoLTVhLjUuNSAwIDAgMS0uNS0uNXoiLz4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yem0xMC0xSDRhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTEiLz4KPC9zdmc+)*/
const FileEasel: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-easel"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 5a.5.5 0 1 0-1 0h-2A1.5 1.5 0 0 0 4 6.5v2A1.5 1.5 0 0 0 5.5 10h.473l-.447 1.342a.5.5 0 1 0 .948.316L7.027 10H7.5v1a.5.5 0 0 0 1 0v-1h.473l.553 1.658a.5.5 0 1 0 .948-.316L10.027 10h.473A1.5 1.5 0 0 0 12 8.5v-2A1.5 1.5 0 0 0 10.5 5zM5 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1"/>
</svg>
      )}
    />
  );

export default FileEasel;

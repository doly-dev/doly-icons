import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDJhLjUuNSAwIDAgMC0uNS41djEyYS41LjUgMCAwIDAgLjUuNWg5YS41LjUgMCAwIDAgLjUtLjV2LTEyYS41LjUgMCAwIDAtLjUtLjVIMTJhLjUuNSAwIDAgMSAwLTFoLjVBMS41IDEuNSAwIDAgMSAxNCAyLjV2MTJhMS41IDEuNSAwIDAgMS0xLjUgMS41aC05QTEuNSAxLjUgMCAwIDEgMiAxNC41di0xMkExLjUgMS41IDAgMCAxIDMuNSAxSDRhLjUuNSAwIDAgMSAwIDF6Ii8+CiAgPHBhdGggZD0iTTEwIC41YS41LjUgMCAwIDAtLjUtLjVoLTNhLjUuNSAwIDAgMC0uNS41LjUuNSAwIDAgMS0uNS41LjUuNSAwIDAgMC0uNS41VjJhLjUuNSAwIDAgMCAuNS41aDVBLjUuNSAwIDAgMCAxMSAydi0uNWEuNS41IDAgMCAwLS41LS41LjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const Clipboard2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5H12a.5.5 0 0 1 0-1h.5A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1H4a.5.5 0 0 1 0 1z"/>
  <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default Clipboard2;

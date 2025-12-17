import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard2-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAuMDU4LjUwMWEuNS41IDAgMCAwLS41LS41MDFoLTIuOThjLS4yNzYgMC0uNS4yMjUtLjUuNTAxQS41LjUgMCAwIDEgNS41ODIgMWEuNDk3LjQ5NyAwIDAgMC0uNDk3LjQ5N1YyYS41LjUgMCAwIDAgLjUuNWg0Ljk2OGEuNS41IDAgMCAwIC41LS41di0uNTAzQS40OTcuNDk3IDAgMCAwIDEwLjU1NSAxYS41LjUgMCAwIDEtLjQ5Ny0uNDk5Ii8+CiAgPHBhdGggZD0iTTMuNjA1IDJhLjUuNSAwIDAgMC0uNS41djEyYS41LjUgMCAwIDAgLjUuNWg5YS41LjUgMCAwIDAgLjUtLjV2LTEyYS41LjUgMCAwIDAtLjUtLjVoLS41YS41LjUgMCAwIDEgMC0xaC41YTEuNSAxLjUgMCAwIDEgMS41IDEuNXYxMmExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTlhMS41IDEuNSAwIDAgMS0xLjUtMS41di0xMmExLjUgMS41IDAgMCAxIDEuNS0xLjVoLjVhLjUuNSAwIDAgMSAwIDF6Ii8+CiAgPHBhdGggZD0iTTguMDY4IDYuNDgyYzEuNjU2LTEuNjczIDUuNzk1IDEuMjU0IDAgNS4wMTgtNS43OTUtMy43NjQtMS42NTYtNi42OSAwLTUuMDE4Ii8+Cjwvc3ZnPg==)*/
const Clipboard2Heart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard2-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.058.501a.5.5 0 0 0-.5-.501h-2.98c-.276 0-.5.225-.5.501A.5.5 0 0 1 5.582 1a.497.497 0 0 0-.497.497V2a.5.5 0 0 0 .5.5h4.968a.5.5 0 0 0 .5-.5v-.503A.497.497 0 0 0 10.555 1a.5.5 0 0 1-.497-.499"/>
  <path d="M3.605 2a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 1 0-1h.5a1.5 1.5 0 0 1 1.5 1.5v12a1.5 1.5 0 0 1-1.5 1.5h-9a1.5 1.5 0 0 1-1.5-1.5v-12a1.5 1.5 0 0 1 1.5-1.5h.5a.5.5 0 0 1 0 1z"/>
  <path d="M8.068 6.482c1.656-1.673 5.795 1.254 0 5.018-5.795-3.764-1.656-6.69 0-5.018"/>
</svg>
      )}
    />
  );

export default Clipboard2Heart;

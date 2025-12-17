import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![nvme](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDQuNUEuNS41IDAgMCAxIDIgNGgxMy41YS41LjUgMCAwIDEgLjUuNVY3YS41LjUgMCAwIDEtLjUuNS41LjUgMCAwIDAgMCAxIC41LjUgMCAwIDEgLjUuNXYyLjVhLjUuNSAwIDAgMS0uNS41SDJhLjUuNSAwIDAgMS0uNS0uNWgtMUEuNS41IDAgMCAxIDAgMTFWNy41QS41LjUgMCAwIDEgLjUgN2gxYS4yNS4yNSAwIDAgMCAwLS41aC0xQS41LjUgMCAwIDEgMCA2VjVhLjUuNSAwIDAgMSAuNS0uNXptMSAuNWEuNS41IDAgMCAxLS41LjVoLS41YTEuMjUgMS4yNSAwIDEgMSAwIDIuNUgxdjIuNWgxYS41LjUgMCAwIDEgLjUuNUgxNVY5LjQxNWExLjUgMS41IDAgMCAxIDAtMi44M1Y1eiIvPgogIDxwYXRoIGQ9Ik00IDYuNWEuNS41IDAgMCAxIC41LS41aDJhLjUuNSAwIDAgMSAuNS41djNhLjUuNSAwIDAgMS0uNS41aC0yYS41LjUgMCAwIDEtLjUtLjV6TTUgN3YyaDFWN3ptMy0uNWEuNS41IDAgMCAxIC41LS41aDRhLjUuNSAwIDAgMSAuNS41djNhLjUuNSAwIDAgMS0uNS41aC00YS41LjUgMCAwIDEtLjUtLjV6TTkgN3YyaDNWN3oiLz4KPC9zdmc+)*/
const Nvme: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="nvme"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 4.5A.5.5 0 0 1 2 4h13.5a.5.5 0 0 1 .5.5V7a.5.5 0 0 1-.5.5.5.5 0 0 0 0 1 .5.5 0 0 1 .5.5v2.5a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5h-1A.5.5 0 0 1 0 11V7.5A.5.5 0 0 1 .5 7h1a.25.25 0 0 0 0-.5h-1A.5.5 0 0 1 0 6V5a.5.5 0 0 1 .5-.5zm1 .5a.5.5 0 0 1-.5.5h-.5a1.25 1.25 0 1 1 0 2.5H1v2.5h1a.5.5 0 0 1 .5.5H15V9.415a1.5 1.5 0 0 1 0-2.83V5z"/>
  <path d="M4 6.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zM5 7v2h1V7zm3-.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5zM9 7v2h3V7z"/>
</svg>
      )}
    />
  );

export default Nvme;

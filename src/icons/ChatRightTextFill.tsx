import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-right-text-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgMmEyIDIgMCAwIDAtMi0ySDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoOS41ODZhMSAxIDAgMCAxIC43MDcuMjkzbDIuODUzIDIuODUzYS41LjUgMCAwIDAgLjg1NC0uMzUzek0zLjUgM2g5YS41LjUgMCAwIDEgMCAxaC05YS41LjUgMCAwIDEgMC0xbTAgMi41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMSAwLTFtMCAyLjVoNWEuNS41IDAgMCAxIDAgMWgtNWEuNS41IDAgMCAxIDAtMSIvPgo8L3N2Zz4=)*/
const ChatRightTextFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-right-text-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM3.5 3h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1m0 2.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default ChatRightTextFill;

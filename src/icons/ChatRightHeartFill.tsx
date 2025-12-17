import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-right-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgMmEyIDIgMCAwIDAtMi0ySDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoOS41ODZhMSAxIDAgMCAxIC43MDcuMjkzbDIuODUzIDIuODUzYS41LjUgMCAwIDAgLjg1NC0uMzUzek04IDMuOTkzYzEuNjY0LTEuNzExIDUuODI1IDEuMjgzIDAgNS4xMzItNS44MjUtMy44NS0xLjY2NC02Ljg0MyAwLTUuMTMyIi8+Cjwvc3ZnPg==)*/
const ChatRightHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-right-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default ChatRightHeartFill;

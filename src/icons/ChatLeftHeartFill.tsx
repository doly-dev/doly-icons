import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-left-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTIuNzkzYS41LjUgMCAwIDAgLjg1NC4zNTNsMi44NTMtMi44NTNBMSAxIDAgMCAxIDQuNDE0IDEySDE0YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yem02IDMuOTkzYzEuNjY0LTEuNzExIDUuODI1IDEuMjgzIDAgNS4xMzItNS44MjUtMy44NS0xLjY2NC02Ljg0MyAwLTUuMTMyIi8+Cjwvc3ZnPg==)*/
const ChatLeftHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-left-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default ChatLeftHeartFill;

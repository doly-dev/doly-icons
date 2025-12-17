import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-square-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMWgtMi41YTIgMiAwIDAgMC0xLjYuOEw4IDE0LjMzMyA2LjEgMTEuOGEyIDIgMCAwIDAtMS42LS44SDJhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTF6TTIgMGEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgyLjVhMSAxIDAgMCAxIC44LjRsMS45IDIuNTMzYTEgMSAwIDAgMCAxLjYgMGwxLjktMi41MzNhMSAxIDAgMCAxIC44LS40SDE0YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yeiIvPgogIDxwYXRoIGQ9Ik04IDMuOTkzYzEuNjY0LTEuNzExIDUuODI1IDEuMjgzIDAgNS4xMzItNS44MjUtMy44NS0xLjY2NC02Ljg0MyAwLTUuMTMyIi8+Cjwvc3ZnPg==)*/
const ChatSquareHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-square-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default ChatSquareHeart;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-square-quote](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMWgtMi41YTIgMiAwIDAgMC0xLjYuOEw4IDE0LjMzMyA2LjEgMTEuOGEyIDIgMCAwIDAtMS42LS44SDJhMSAxIDAgMCAxLTEtMVYyYTEgMSAwIDAgMSAxLTF6TTIgMGEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgyLjVhMSAxIDAgMCAxIC44LjRsMS45IDIuNTMzYTEgMSAwIDAgMCAxLjYgMGwxLjktMi41MzNhMSAxIDAgMCAxIC44LS40SDE0YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yeiIvPgogIDxwYXRoIGQ9Ik03LjA2NiA0Ljc2QTEuNjY1IDEuNjY1IDAgMCAwIDQgNS42NjhhMS42NjcgMS42NjcgMCAwIDAgMi41NjEgMS40MDZjLS4xMzEuMzg5LS4zNzUuODA0LS43NzcgMS4yMmEuNDE3LjQxNyAwIDEgMCAuNi41OGMxLjQ4Ni0xLjU0IDEuMjkzLTMuMjE0LjY4Mi00LjExMnptNCAwQTEuNjY1IDEuNjY1IDAgMCAwIDggNS42NjhhMS42NjcgMS42NjcgMCAwIDAgMi41NjEgMS40MDZjLS4xMzEuMzg5LS4zNzUuODA0LS43NzcgMS4yMmEuNDE3LjQxNyAwIDEgMCAuNi41OGMxLjQ4Ni0xLjU0IDEuMjkzLTMuMjE0LjY4Mi00LjExMnoiLz4KPC9zdmc+)*/
const ChatSquareQuote: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-square-quote"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"/>
</svg>
      )}
    />
  );

export default ChatSquareQuote;

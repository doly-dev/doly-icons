import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-dots-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOGMwIDMuODY2LTMuNTgyIDctOCA3YTkgOSAwIDAgMS0yLjM0Ny0uMzA2Yy0uNTg0LjI5Ni0xLjkyNS44NjQtNC4xODEgMS4yMzQtLjIuMDMyLS4zNTItLjE3Ni0uMjczLS4zNjIuMzU0LS44MzYuNjc0LTEuOTUuNzctMi45NjZDLjc0NCAxMS4zNyAwIDkuNzYgMCA4YzAtMy44NjYgMy41ODItNyA4LTdzOCAzLjEzNCA4IDdNNSA4YTEgMSAwIDEgMC0yIDAgMSAxIDAgMCAwIDIgMG00IDBhMSAxIDAgMSAwLTIgMCAxIDEgMCAwIDAgMiAwbTMgMWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDIiLz4KPC9zdmc+)*/
const ChatDotsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-dots-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
      )}
    />
  );

export default ChatDotsFill;

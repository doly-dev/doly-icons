import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-right-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMGEyIDIgMCAwIDEgMiAydjEyLjc5M2EuNS41IDAgMCAxLS44NTQuMzUzbC0yLjg1My0yLjg1M2ExIDEgMCAwIDAtLjcwNy0uMjkzSDJhMiAyIDAgMCAxLTItMlYyYTIgMiAwIDAgMSAyLTJ6Ii8+Cjwvc3ZnPg==)*/
const ChatRightFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-right-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 0a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
</svg>
      )}
    />
  );

export default ChatRightFill;

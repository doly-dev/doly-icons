import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDkuNTg2YTIgMiAwIDAgMSAxLjQxNC41ODZsMiAyVjJhMSAxIDAgMCAwLTEtMXptMTItMWEyIDIgMCAwIDEgMiAydjEyLjc5M2EuNS41IDAgMCAxLS44NTQuMzUzbC0yLjg1My0yLjg1M2ExIDEgMCAwIDAtLjcwNy0uMjkzSDJhMiAyIDAgMCAxLTItMlYyYTIgMiAwIDAgMSAyLTJ6Ii8+Cjwvc3ZnPg==)*/
const ChatRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
</svg>
      )}
    />
  );

export default ChatRight;

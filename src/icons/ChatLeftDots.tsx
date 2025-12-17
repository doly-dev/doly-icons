import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-left-dots](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUg0LjQxNEEyIDIgMCAwIDAgMyAxMS41ODZsLTIgMlYyYTEgMSAwIDAgMSAxLTF6TTIgMGEyIDIgMCAwIDAtMiAydjEyLjc5M2EuNS41IDAgMCAwIC44NTQuMzUzbDIuODUzLTIuODUzQTEgMSAwIDAgMSA0LjQxNCAxMkgxNGEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNNSA2YTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMG00IDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTQgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDAiLz4KPC9zdmc+)*/
const ChatLeftDots: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-left-dots"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
      )}
    />
  );

export default ChatLeftDots;

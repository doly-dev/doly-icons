import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-left-dots-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJINC40MTRhMSAxIDAgMCAwLS43MDcuMjkzTC44NTQgMTUuMTQ2QS41LjUgMCAwIDEgMCAxNC43OTN6bTUgNGExIDEgMCAxIDAtMiAwIDEgMSAwIDAgMCAyIDBtNCAwYTEgMSAwIDEgMC0yIDAgMSAxIDAgMCAwIDIgMG0zIDFhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyIi8+Cjwvc3ZnPg==)*/
const ChatLeftDotsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-left-dots-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg>
      )}
    />
  );

export default ChatLeftDotsFill;

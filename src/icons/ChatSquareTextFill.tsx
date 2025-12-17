import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-square-text-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJoLTIuNWExIDEgMCAwIDAtLjguNGwtMS45IDIuNTMzYTEgMSAwIDAgMS0xLjYgMEw1LjMgMTIuNGExIDEgMCAwIDAtLjgtLjRIMmEyIDIgMCAwIDEtMi0yem0zLjUgMWEuNS41IDAgMCAwIDAgMWg5YS41LjUgMCAwIDAgMC0xem0wIDIuNWEuNS41IDAgMCAwIDAgMWg5YS41LjUgMCAwIDAgMC0xem0wIDIuNWEuNS41IDAgMCAwIDAgMWg1YS41LjUgMCAwIDAgMC0xeiIvPgo8L3N2Zz4=)*/
const ChatSquareTextFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-square-text-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default ChatSquareTextFill;

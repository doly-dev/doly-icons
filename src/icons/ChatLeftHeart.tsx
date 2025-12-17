import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-left-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMWExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUg0LjQxNEEyIDIgMCAwIDAgMyAxMS41ODZsLTIgMlYyYTEgMSAwIDAgMSAxLTF6TTIgMGEyIDIgMCAwIDAtMiAydjEyLjc5M2EuNS41IDAgMCAwIC44NTQuMzUzbDIuODUzLTIuODUzQTEgMSAwIDAgMSA0LjQxNCAxMkgxNGEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnoiLz4KICA8cGF0aCBkPSJNOCAzLjk5M2MxLjY2NC0xLjcxMSA1LjgyNSAxLjI4MyAwIDUuMTMyLTUuODI1LTMuODUtMS42NjQtNi44NDMgMC01LjEzMiIvPgo8L3N2Zz4=)*/
const ChatLeftHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-left-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default ChatLeftHeart;

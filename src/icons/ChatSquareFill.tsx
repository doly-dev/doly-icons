import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chat-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2OGEyIDIgMCAwIDAgMiAyaDIuNWExIDEgMCAwIDEgLjguNGwxLjkgMi41MzNhMSAxIDAgMCAwIDEuNiAwbDEuOS0yLjUzM2ExIDEgMCAwIDEgLjgtLjRIMTRhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6Ii8+Cjwvc3ZnPg==)*/
const ChatSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chat-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default ChatSquareFill;

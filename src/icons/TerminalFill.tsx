import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![terminal-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAzYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptOS41IDUuNWgtM2EuNS41IDAgMCAwIDAgMWgzYS41LjUgMCAwIDAgMC0xbS02LjM1NC0uMzU0YS41LjUgMCAxIDAgLjcwOC43MDhsMi0yYS41LjUgMCAwIDAgMC0uNzA4bC0yLTJhLjUuNSAwIDEgMC0uNzA4LjcwOEw0Ljc5MyA2LjV6Ii8+Cjwvc3ZnPg==)*/
const TerminalFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="terminal-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm9.5 5.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-6.354-.354a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2a.5.5 0 1 0-.708.708L4.793 6.5z"/>
</svg>
      )}
    />
  );

export default TerminalFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDEuNUExLjUgMS41IDAgMCAxIDYuNSAwaDNBMS41IDEuNSAwIDAgMSAxMSAxLjV2MUExLjUgMS41IDAgMCAxIDkuNSA0aC0zQTEuNSAxLjUgMCAwIDEgNSAyLjV6bTUgMGEuNS41IDAgMCAwLS41LS41aC0zYS41LjUgMCAwIDAtLjUuNXYxYS41LjUgMCAwIDAgLjUuNWgzYS41LjUgMCAwIDAgLjUtLjV6Ii8+CiAgPHBhdGggZD0iTTMgMS41aDF2MUgzYTEgMSAwIDAgMC0xIDFWMTRhMSAxIDAgMCAwIDEgMWgxMGExIDEgMCAwIDAgMS0xVjMuNWExIDEgMCAwIDAtMS0xaC0xdi0xaDFhMiAyIDAgMCAxIDIgMlYxNGEyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMlYzLjVhMiAyIDAgMCAxIDItMiIvPgogIDxwYXRoIGQ9Ik04IDYuOTgyQzkuNjY0IDUuMzA5IDEzLjgyNSA4LjIzNiA4IDEyIDIuMTc1IDguMjM2IDYuMzM2IDUuMzEgOCA2Ljk4MiIvPgo8L3N2Zz4=)*/
const ClipboardHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M5 1.5A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5zm5 0a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z"/>
  <path d="M3 1.5h1v1H3a1 1 0 0 0-1 1V14a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1h-1v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2"/>
  <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.31 8 6.982"/>
</svg>
      )}
    />
  );

export default ClipboardHeart;

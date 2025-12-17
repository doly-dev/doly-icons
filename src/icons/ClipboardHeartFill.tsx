import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clipboard-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjUgMEExLjUgMS41IDAgMCAwIDUgMS41djFBMS41IDEuNSAwIDAgMCA2LjUgNGgzQTEuNSAxLjUgMCAwIDAgMTEgMi41di0xQTEuNSAxLjUgMCAwIDAgOS41IDB6bTMgMWEuNS41IDAgMCAxIC41LjV2MWEuNS41IDAgMCAxLS41LjVoLTNhLjUuNSAwIDAgMS0uNS0uNXYtMWEuNS41IDAgMCAxIC41LS41eiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTQgMS41SDNhMiAyIDAgMCAwLTIgMlYxNGEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJWMy41YTIgMiAwIDAgMC0yLTJoLTF2MUEyLjUgMi41IDAgMCAxIDkuNSA1aC0zQTIuNSAyLjUgMCAwIDEgNCAyLjV6bTQgNS45ODJjMS42NjQtMS42NzMgNS44MjUgMS4yNTQgMCA1LjAxOC01LjgyNS0zLjc2NC0xLjY2NC02LjY5IDAtNS4wMTgiLz4KPC9zdmc+)*/
const ClipboardHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clipboard-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"/>
  <path fillRule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm4 5.982c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
</svg>
      )}
    />
  );

export default ClipboardHeartFill;

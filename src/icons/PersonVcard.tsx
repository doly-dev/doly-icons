import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-vcard](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSA4YTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNG00LTIuNWEuNS41IDAgMCAxIC41LS41aDRhLjUuNSAwIDAgMSAwIDFoLTRhLjUuNSAwIDAgMS0uNS0uNU05IDhhLjUuNSAwIDAgMSAuNS0uNWg0YS41LjUgMCAwIDEgMCAxaC00QS41LjUgMCAwIDEgOSA4bTEgMi41YS41LjUgMCAwIDEgLjUtLjVoM2EuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZD0iTTIgMmEyIDIgMCAwIDAtMiAydjhhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjRhMiAyIDAgMCAwLTItMnpNMSA0YTEgMSAwIDAgMSAxLTFoMTJhMSAxIDAgMCAxIDEgMXY4YTEgMSAwIDAgMS0xIDFIOC45NnEuMDQtLjI0NS4wNC0uNUM5IDEwLjU2NyA3LjIxIDkgNSA5Yy0yLjA4NiAwLTMuOCAxLjM5OC0zLjk4NCAzLjE4MUExIDEgMCAwIDEgMSAxMnoiLz4KPC9zdmc+)*/
const PersonVcard: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-vcard"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5"/>
  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z"/>
</svg>
      )}
    />
  );

export default PersonVcard;

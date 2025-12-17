import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pass](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41IDVhLjUuNSAwIDAgMCAwIDFoNWEuNS41IDAgMCAwIDAtMXptMCAyYS41LjUgMCAwIDAgMCAxaDNhLjUuNSAwIDAgMCAwLTF6Ii8+CiAgPHBhdGggZD0iTTggMmEyIDIgMCAwIDAgMi0yaDIuNUExLjUgMS41IDAgMCAxIDE0IDEuNXYxM2ExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTlBMS41IDEuNSAwIDAgMSAyIDE0LjV2LTEzQTEuNSAxLjUgMCAwIDEgMy41IDBINmEyIDIgMCAwIDAgMiAybTAgMWEzIDMgMCAwIDEtMi44My0ySDMuNWEuNS41IDAgMCAwLS41LjV2MTNhLjUuNSAwIDAgMCAuNS41aDlhLjUuNSAwIDAgMCAuNS0uNXYtMTNhLjUuNSAwIDAgMC0uNS0uNWgtMS42N0EzIDMgMCAwIDEgOCAzIi8+Cjwvc3ZnPg==)*/
const Pass: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pass"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z"/>
  <path d="M8 2a2 2 0 0 0 2-2h2.5A1.5 1.5 0 0 1 14 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-13A1.5 1.5 0 0 1 3.5 0H6a2 2 0 0 0 2 2m0 1a3 3 0 0 1-2.83-2H3.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5h-1.67A3 3 0 0 1 8 3"/>
</svg>
      )}
    />
  );

export default Pass;

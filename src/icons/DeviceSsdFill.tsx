import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![device-ssd-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSA4VjRoNnY0eiIvPgogIDxwYXRoIGQ9Ik00IDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJ6bTAgMS41YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwbTkgMGEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgME0zLjUgMTFhLjUuNSAwIDEgMCAwLTEgLjUuNSAwIDAgMCAwIDFtOS41LS41YS41LjUgMCAxIDEtMSAwIC41LjUgMCAwIDEgMSAwTTQuNzUgM2g2LjVhLjc1Ljc1IDAgMCAxIC43NS43NXY0LjVhLjc1Ljc1IDAgMCAxLS43NS43NWgtNi41QS43NS43NSAwIDAgMSA0IDguMjV2LTQuNUEuNzUuNzUgMCAwIDEgNC43NSAzTTUgMTJoNmExIDEgMCAwIDEgMSAxdjJoLTF2LTJoLS43NXYyaC0xdi0ySDguNXYyaC0xdi0yaC0uNzV2MmgtMXYtMkg1djJINHYtMmExIDEgMCAwIDEgMS0xIi8+Cjwvc3ZnPg==)*/
const DeviceSsdFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="device-ssd-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 8V4h6v4z"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m9 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M3.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m9.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4.75 3h6.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-.75.75h-6.5A.75.75 0 0 1 4 8.25v-4.5A.75.75 0 0 1 4.75 3M5 12h6a1 1 0 0 1 1 1v2h-1v-2h-.75v2h-1v-2H8.5v2h-1v-2h-.75v2h-1v-2H5v2H4v-2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default DeviceSsdFill;

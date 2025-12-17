import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![modem-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAwYTEuNSAxLjUgMCAwIDAtMS41IDEuNXYxMWExLjUgMS41IDAgMCAwIDEuNDA0IDEuNDk3Yy0uMzUuMzA1LS44NzIuNjc4LTEuNjI4IDEuMDU2QS41LjUgMCAwIDAgNS41IDE2aDVhLjUuNSAwIDAgMCAuMjI0LS45NDdjLS43NTYtLjM3OC0xLjI3OC0uNzUtMS42MjgtMS4wNTZBMS41IDEuNSAwIDAgMCAxMC41IDEyLjV2LTExQTEuNSAxLjUgMCAwIDAgOSAwem0xIDNhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFtMCAyYS41LjUgMCAxIDEgMC0xIC41LjUgMCAwIDEgMCAxbS41IDEuNWEuNS41IDAgMSAxLTEgMCAuNS41IDAgMCAxIDEgME04IDlhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDEiLz4KPC9zdmc+)*/
const ModemFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="modem-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 0a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 1.404 1.497c-.35.305-.872.678-1.628 1.056A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .224-.947c-.756-.378-1.278-.75-1.628-1.056A1.5 1.5 0 0 0 10.5 12.5v-11A1.5 1.5 0 0 0 9 0zm1 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M8 9a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
</svg>
      )}
    />
  );

export default ModemFill;

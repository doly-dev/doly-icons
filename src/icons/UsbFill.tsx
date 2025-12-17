import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjUgNWEuNS41IDAgMCAwLS41LjV2NWEuNS41IDAgMCAwIC41LjVoMTVhLjUuNSAwIDAgMCAuNS0uNXYtNWEuNS41IDAgMCAwLS41LS41em0xLjc1IDEuNWgxMS41YS4yNS4yNSAwIDAgMSAuMjUuMjV2MWEuMjUuMjUgMCAwIDEtLjI1LjI1SDIuMjVBLjI1LjI1IDAgMCAxIDIgNy43NXYtMWEuMjUuMjUgMCAwIDEgLjI1LS4yNSIvPgo8L3N2Zz4=)*/
const UsbFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.5 5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5zm1.75 1.5h11.5a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25H2.25A.25.25 0 0 1 2 7.75v-1a.25.25 0 0 1 .25-.25"/>
</svg>
      )}
    />
  );

export default UsbFill;

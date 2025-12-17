import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-drive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAuNWEuNS41IDAgMCAxIC41LS41aDRhLjUuNSAwIDAgMSAuNS41djRINnpNNyAxdjFoMVYxem0yIDB2MWgxVjF6TTYgNWExIDEgMCAwIDAtMSAxdjguNUExLjUgMS41IDAgMCAwIDYuNSAxNmg0YTEuNSAxLjUgMCAwIDAgMS41LTEuNVY2YTEgMSAwIDAgMC0xLTF6bTAgMWg1djguNWEuNS41IDAgMCAxLS41LjVoLTRhLjUuNSAwIDAgMS0uNS0uNXoiLz4KPC9zdmc+)*/
const UsbDrive: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-drive"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM6 5a1 1 0 0 0-1 1v8.5A1.5 1.5 0 0 0 6.5 16h4a1.5 1.5 0 0 0 1.5-1.5V6a1 1 0 0 0-1-1zm0 1h5v8.5a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5z"/>
</svg>
      )}
    />
  );

export default UsbDrive;

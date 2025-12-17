import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-drive-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAuNWEuNS41IDAgMCAxIC41LS41aDRhLjUuNSAwIDAgMSAuNS41djRINnpNNyAxdjFoMVYxem0yIDB2MWgxVjF6TTUuNSA1YS41LjUgMCAwIDAtLjUuNVYxNWExIDEgMCAwIDAgMSAxaDVhMSAxIDAgMCAwIDEtMVY1LjVhLjUuNSAwIDAgMC0uNS0uNXoiLz4KPC9zdmc+)*/
const UsbDriveFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-drive-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM5.5 5a.5.5 0 0 0-.5.5V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5.5a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default UsbDriveFill;

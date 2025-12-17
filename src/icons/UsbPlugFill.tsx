import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-plug-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAuNWEuNS41IDAgMCAxIC41LS41aDRhLjUuNSAwIDAgMSAuNS41djRINnpNNyAxdjFoMVYxem0yIDB2MWgxVjF6TTUuNSA1YS41LjUgMCAwIDAtLjUuNXY0Ljg5NGEyIDIgMCAwIDAgLjMzNiAxLjExbC44MyAxLjI0NWMuNTQ0LjgxNi44MzQgMS43NzQuODM0IDIuNzU0IDAgLjI3NS4yMjIuNDk3LjQ5Ny40OTdoMi4wMDZhLjQ5Ny40OTcgMCAwIDAgLjQ5Ny0uNDk3YzAtLjk4LjI5LTEuOTM4LjgzNC0yLjc1NGwuODMtMS4yNDVhMiAyIDAgMCAwIC4zMzYtMS4xMVY1LjVhLjUuNSAwIDAgMC0uNS0uNXoiLz4KPC9zdmc+)*/
const UsbPlugFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-plug-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM5.5 5a.5.5 0 0 0-.5.5v4.894a2 2 0 0 0 .336 1.11l.83 1.245c.544.816.834 1.774.834 2.754 0 .275.222.497.497.497h2.006a.497.497 0 0 0 .497-.497c0-.98.29-1.938.834-2.754l.83-1.245a2 2 0 0 0 .336-1.11V5.5a.5.5 0 0 0-.5-.5z"/>
</svg>
      )}
    />
  );

export default UsbPlugFill;

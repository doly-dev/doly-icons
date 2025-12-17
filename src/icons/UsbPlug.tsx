import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-plug](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAuNWEuNS41IDAgMCAxIC41LS41aDRhLjUuNSAwIDAgMSAuNS41djRINnpNNyAxdjFoMVYxem0yIDB2MWgxVjF6TTYgNWExIDEgMCAwIDAtMSAxdjQuMzk0YzAgLjQ5NC4xNDYuOTc2LjQyIDEuMzg3bDEuMDM4IDEuNTU4Yy4zNTQuNTMuNTQyIDEuMTUyLjU0MiAxLjc4OSAwIC40ODEuMzkuODcyLjg3Mi44NzJoMS4yNTZjLjQ4MSAwIC44NzItLjM5Ljg3Mi0uODcyIDAtLjYzNy4xODgtMS4yNi41NDEtMS43ODlsMS4wNC0xLjU1OEEyLjUgMi41IDAgMCAwIDEyIDEwLjM5NFY2YTEgMSAwIDAgMC0xLTF6bTAgMWg1djQuMzk0YTEuNSAxLjUgMCAwIDEtLjI1Mi44MzJMOS43MSAxMi43ODRBNC4yIDQuMiAwIDAgMCA5LjAwMiAxNUg3Ljk5OGE0LjIgNC4yIDAgMCAwLS43MDctMi4yMTZsLTEuMDQtMS41NThBMS41IDEuNSAwIDAgMSA2IDEwLjM5NHoiLz4KPC9zdmc+)*/
const UsbPlug: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-plug"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6zM7 1v1h1V1zm2 0v1h1V1zM6 5a1 1 0 0 0-1 1v4.394c0 .494.146.976.42 1.387l1.038 1.558c.354.53.542 1.152.542 1.789 0 .481.39.872.872.872h1.256c.481 0 .872-.39.872-.872 0-.637.188-1.26.541-1.789l1.04-1.558A2.5 2.5 0 0 0 12 10.394V6a1 1 0 0 0-1-1zm0 1h5v4.394a1.5 1.5 0 0 1-.252.832L9.71 12.784A4.2 4.2 0 0 0 9.002 15H7.998a4.2 4.2 0 0 0-.707-2.216l-1.04-1.558A1.5 1.5 0 0 1 6 10.394z"/>
</svg>
      )}
    />
  );

export default UsbPlug;

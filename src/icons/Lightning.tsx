import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![lightning](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS41Mi4zNTlBLjUuNSAwIDAgMSA2IDBoNGEuNS41IDAgMCAxIC40NzQuNjU4TDguNjk0IDZIMTIuNWEuNS41IDAgMCAxIC4zOTUuODA3bC03IDlhLjUuNSAwIDAgMS0uODczLS40NTRMNi44MjMgOS41SDMuNWEuNS41IDAgMCAxLS40OC0uNjQxek02LjM3NCAxIDQuMTY4IDguNUg3LjVhLjUuNSAwIDAgMSAuNDc4LjY0N0w2Ljc4IDEzLjA0IDExLjQ3OCA3SDhhLjUuNSAwIDAgMS0uNDc0LS42NThMOS4zMDYgMXoiLz4KPC9zdmc+)*/
const Lightning: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="lightning"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1z"/>
</svg>
      )}
    />
  );

export default Lightning;

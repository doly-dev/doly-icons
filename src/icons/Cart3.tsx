import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cart3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBLjUuNSAwIDAgMSAuNSAxSDJhLjUuNSAwIDAgMSAuNDg1LjM3OUwyLjg5IDNIMTQuNWEuNS41IDAgMCAxIC40OS41OThsLTEgNWEuNS41IDAgMCAxLS40NjUuNDAxbC05LjM5Ny40NzJMNC40MTUgMTFIMTNhLjUuNSAwIDAgMSAwIDFINGEuNS41IDAgMCAxLS40OTEtLjQwOEwyLjAxIDMuNjA3IDEuNjEgMkguNWEuNS41IDAgMCAxLS41LS41TTMuMTAyIDRsLjg0IDQuNDc5IDkuMTQ0LS40NTlMMTMuODkgNHpNNSAxMmEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRtNyAwYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNG0tNyAxYTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMm03IDBhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yIi8+Cjwvc3ZnPg==)*/
const Cart3: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cart3"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
      )}
    />
  );

export default Cart3;

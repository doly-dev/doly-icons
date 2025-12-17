import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBLjUuNSAwIDAgMSAuNSAxSDJhLjUuNSAwIDAgMSAuNDg1LjM3OUwyLjg5IDNIMTQuNWEuNS41IDAgMCAxIC40OTEuNTkybC0xLjUgOEEuNS41IDAgMCAxIDEzIDEySDRhLjUuNSAwIDAgMS0uNDkxLS40MDhMMi4wMSAzLjYwNyAxLjYxIDJILjVhLjUuNSAwIDAgMS0uNS0uNU0zLjEwMiA0bDEuMzEzIDdoOC4xN2wxLjMxMy03ek01IDEyYTIgMiAwIDEgMCAwIDQgMiAyIDAgMCAwIDAtNG03IDBhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00bS03IDFhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0ybTcgMGExIDEgMCAxIDEgMCAyIDEgMSAwIDAgMSAwLTIiLz4KPC9zdmc+)*/
const Cart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
      )}
    />
  );

export default Cart;

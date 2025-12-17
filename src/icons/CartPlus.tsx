import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cart-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSA1LjVhLjUuNSAwIDAgMC0xIDBWN0g2LjVhLjUuNSAwIDAgMCAwIDFIOHYxLjVhLjUuNSAwIDAgMCAxIDBWOGgxLjVhLjUuNSAwIDAgMCAwLTFIOXoiLz4KICA8cGF0aCBkPSJNLjUgMWEuNS41IDAgMCAwIDAgMWgxLjExbC40MDEgMS42MDcgMS40OTggNy45ODVBLjUuNSAwIDAgMCA0IDEyaDFhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00aDdhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00aDFhLjUuNSAwIDAgMCAuNDkxLS40MDhsMS41LThBLjUuNSAwIDAgMCAxNC41IDNIMi44OWwtLjQwNS0xLjYyMUEuNS41IDAgMCAwIDIgMXptMy45MTUgMTBMMy4xMDIgNGgxMC43OTZsLTEuMzEzIDd6TTYgMTRhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwbTcgMGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDAiLz4KPC9zdmc+)*/
const CartPlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cart-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
      )}
    />
  );

export default CartPlus;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cart-x-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjUgMWEuNS41IDAgMCAwIDAgMWgxLjExbC40MDEgMS42MDcgMS40OTggNy45ODVBLjUuNSAwIDAgMCA0IDEyaDFhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00aDdhMiAyIDAgMSAwIDAgNCAyIDIgMCAwIDAgMC00aDFhLjUuNSAwIDAgMCAuNDkxLS40MDhsMS41LThBLjUuNSAwIDAgMCAxNC41IDNIMi44OWwtLjQwNS0xLjYyMUEuNS41IDAgMCAwIDIgMXpNNiAxNGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtNyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgME03LjM1NCA1LjY0NiA4LjUgNi43OTNsMS4xNDYtMS4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOEw5LjIwNyA3LjVsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4LjUgOC4yMDcgNy4zNTQgOS4zNTRhLjUuNSAwIDEgMS0uNzA4LS43MDhMNy43OTMgNy41IDYuNjQ2IDYuMzU0YS41LjUgMCAxIDEgLjcwOC0uNzA4Ii8+Cjwvc3ZnPg==)*/
const CartXFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cart-x-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708"/>
</svg>
      )}
    />
  );

export default CartXFill;

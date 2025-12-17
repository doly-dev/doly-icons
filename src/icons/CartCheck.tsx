import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cart-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuMzU0IDYuMzU0YS41LjUgMCAwIDAtLjcwOC0uNzA4TDggOC4yOTMgNi44NTQgNy4xNDZhLjUuNSAwIDEgMC0uNzA4LjcwOGwxLjUgMS41YS41LjUgMCAwIDAgLjcwOCAweiIvPgogIDxwYXRoIGQ9Ik0uNSAxYS41LjUgMCAwIDAgMCAxaDEuMTFsLjQwMSAxLjYwNyAxLjQ5OCA3Ljk4NUEuNS41IDAgMCAwIDQgMTJoMWEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRoN2EyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRoMWEuNS41IDAgMCAwIC40OTEtLjQwOGwxLjUtOEEuNS41IDAgMCAwIDE0LjUgM0gyLjg5bC0uNDA1LTEuNjIxQS41LjUgMCAwIDAgMiAxem0zLjkxNSAxMEwzLjEwMiA0aDEwLjc5NmwtMS4zMTMgN3pNNiAxNGExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBtNyAwYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIvPgo8L3N2Zz4=)*/
const CartCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cart-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
      )}
    />
  );

export default CartCheck;

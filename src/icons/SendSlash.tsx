import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![send-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuOTY0LjY4NmEuNS41IDAgMCAwLS42NS0uNjVMLjc2NyA1Ljg1NWEuNzUuNzUgMCAwIDAtLjEyNCAxLjMyOWw0Ljk5NSAzLjE3OCAxLjUzMSAyLjQwNmEuNS41IDAgMCAwIC44NDQtLjUzNkw2LjYzNyAxMC4wN2w3LjQ5NC03LjQ5NC0xLjg5NSA0LjczOGEuNS41IDAgMSAwIC45MjguMzcyem0tMi41NCAxLjE4M0w1LjkzIDkuMzYzIDEuNTkxIDYuNjAyeiIvPgogIDxwYXRoIGQ9Ik0xNC45NzUgMTAuMDI1YTMuNSAzLjUgMCAxIDAtNC45NSA0Ljk1IDMuNSAzLjUgMCAwIDAgNC45NS00Ljk1bS00LjI0My43MDdhMi41IDIuNSAwIDAgMSAzLjE0Ny0uMzE4bC0zLjQ2NSAzLjQ2NWEyLjUgMi41IDAgMCAxIC4zMTgtMy4xNDdtLjM5IDMuODU0IDMuNDY0LTMuNDY1YTIuNTAxIDIuNTAxIDAgMCAxLTMuNDY1IDMuNDY1WiIvPgo8L3N2Zz4=)*/
const SendSlash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="send-slash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
  <path d="M14.975 10.025a3.5 3.5 0 1 0-4.95 4.95 3.5 3.5 0 0 0 4.95-4.95m-4.243.707a2.5 2.5 0 0 1 3.147-.318l-3.465 3.465a2.5 2.5 0 0 1 .318-3.147m.39 3.854 3.464-3.465a2.501 2.501 0 0 1-3.465 3.465Z"/>
</svg>
      )}
    />
  );

export default SendSlash;

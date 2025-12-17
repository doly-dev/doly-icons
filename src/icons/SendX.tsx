import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![send-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuOTY0LjY4NmEuNS41IDAgMCAwLS42NS0uNjVMLjc2NyA1Ljg1NWEuNzUuNzUgMCAwIDAtLjEyNCAxLjMyOWw0Ljk5NSAzLjE3OCAxLjUzMSAyLjQwNmEuNS41IDAgMCAwIC44NDQtLjUzNkw2LjYzNyAxMC4wN2w3LjQ5NC03LjQ5NC0xLjg5NSA0LjczOGEuNS41IDAgMSAwIC45MjguMzcyem0tMi41NCAxLjE4M0w1LjkzIDkuMzYzIDEuNTkxIDYuNjAyeiIvPgogIDxwYXRoIGQ9Ik0xNiAxMi41YTMuNSAzLjUgMCAxIDEtNyAwIDMuNSAzLjUgMCAwIDEgNyAwbS00Ljg1NC0xLjM1NGEuNS41IDAgMCAwIDAgLjcwOGwuNjQ3LjY0Ni0uNjQ3LjY0NmEuNS41IDAgMCAwIC43MDguNzA4bC42NDYtLjY0Ny42NDYuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4bC0uNjQ3LS42NDYuNjQ3LS42NDZhLjUuNSAwIDAgMC0uNzA4LS43MDhsLS42NDYuNjQ3LS42NDYtLjY0N2EuNS41IDAgMCAwLS43MDggMCIvPgo8L3N2Zz4=)*/
const SendX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="send-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372zm-2.54 1.183L5.93 9.363 1.591 6.602z"/>
  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-4.854-1.354a.5.5 0 0 0 0 .708l.647.646-.647.646a.5.5 0 0 0 .708.708l.646-.647.646.647a.5.5 0 0 0 .708-.708l-.647-.646.647-.646a.5.5 0 0 0-.708-.708l-.646.647-.646-.647a.5.5 0 0 0-.708 0"/>
</svg>
      )}
    />
  );

export default SendX;

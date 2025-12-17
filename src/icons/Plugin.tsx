import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![plugin](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDhhNyA3IDAgMSAxIDIuODk4IDUuNjczYy0uMTY3LS4xMjEtLjIxNi0uNDA2LS4wMDItLjYybDEuOC0xLjhhMy41IDMuNSAwIDAgMCA0LjU3Mi0uMzI4bDEuNDE0LTEuNDE1YS41LjUgMCAwIDAgMC0uNzA3bC0uNzA3LS43MDcgMS41NTktMS41NjNhLjUuNSAwIDEgMC0uNzA4LS43MDZsLTEuNTU5IDEuNTYyLTEuNDE0LTEuNDE0IDEuNTYtMS41NjJhLjUuNSAwIDEgMC0uNzA3LS43MDZsLTEuNTYgMS41Ni0uNzA3LS43MDZhLjUuNSAwIDAgMC0uNzA3IDBMNS4zMTggNS45NzVhMy41IDMuNSAwIDAgMC0uMzI4IDQuNTcxbC0xLjggMS44Yy0uNTguNTgtLjYyIDEuNi4xMjEgMi4xMzdBOCA4IDAgMSAwIDAgOGEuNS41IDAgMCAwIDEgMCIvPgo8L3N2Zz4=)*/
const Plugin: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="plugin"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 8a7 7 0 1 1 2.898 5.673c-.167-.121-.216-.406-.002-.62l1.8-1.8a3.5 3.5 0 0 0 4.572-.328l1.414-1.415a.5.5 0 0 0 0-.707l-.707-.707 1.559-1.563a.5.5 0 1 0-.708-.706l-1.559 1.562-1.414-1.414 1.56-1.562a.5.5 0 1 0-.707-.706l-1.56 1.56-.707-.706a.5.5 0 0 0-.707 0L5.318 5.975a3.5 3.5 0 0 0-.328 4.571l-1.8 1.8c-.58.58-.62 1.6.121 2.137A8 8 0 1 0 0 8a.5.5 0 0 0 1 0"/>
</svg>
      )}
    />
  );

export default Plugin;

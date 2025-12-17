import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bank2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4yNzcuMDg0YS41LjUgMCAwIDAtLjU1NCAwbC03LjUgNUEuNS41IDAgMCAwIC41IDZoMS44NzV2N0gxLjVhLjUuNSAwIDAgMCAwIDFoMTNhLjUuNSAwIDEgMCAwLTFoLS44NzVWNkgxNS41YS41LjUgMCAwIDAgLjI3Ny0uOTE2ek0xMi4zNzUgNnY3aC0xLjI1VjZ6bS0yLjUgMHY3aC0xLjI1VjZ6bS0yLjUgMHY3aC0xLjI1VjZ6bS0yLjUgMHY3aC0xLjI1VjZ6TTggNGExIDEgMCAxIDEgMC0yIDEgMSAwIDAgMSAwIDJNLjUgMTVhLjUuNSAwIDAgMCAwIDFoMTVhLjUuNSAwIDEgMCAwLTF6Ii8+Cjwvc3ZnPg==)*/
const Bank2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bank2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1z"/>
</svg>
      )}
    />
  );

export default Bank2;

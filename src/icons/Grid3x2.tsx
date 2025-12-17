import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![grid-3x2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAzLjVBMS41IDEuNSAwIDAgMSAxLjUgMmgxM0ExLjUgMS41IDAgMCAxIDE2IDMuNXY4YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTNBMS41IDEuNSAwIDAgMSAwIDExLjV6TTEuNSAzYS41LjUgMCAwIDAtLjUuNVY3aDRWM3pNNSA4SDF2My41YS41LjUgMCAwIDAgLjUuNUg1em0xIDB2NGg0Vjh6bTQtMVYzSDZ2NHptMSAxdjRoMy41YS41LjUgMCAwIDAgLjUtLjVWOHptMC0xaDRWMy41YS41LjUgMCAwIDAtLjUtLjVIMTF6Ii8+Cjwvc3ZnPg==)*/
const Grid3x2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="grid-3x2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5zM1.5 3a.5.5 0 0 0-.5.5V7h4V3zM5 8H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4V8zm4-1V3H6v4zm1 1v4h3.5a.5.5 0 0 0 .5-.5V8zm0-1h4V3.5a.5.5 0 0 0-.5-.5H11z"/>
</svg>
      )}
    />
  );

export default Grid3x2;

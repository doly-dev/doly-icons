import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![grid-3x3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxLjVBMS41IDEuNSAwIDAgMSAxLjUgMGgxM0ExLjUgMS41IDAgMCAxIDE2IDEuNXYxM2ExLjUgMS41IDAgMCAxLTEuNSAxLjVoLTEzQTEuNSAxLjUgMCAwIDEgMCAxNC41ek0xLjUgMWEuNS41IDAgMCAwLS41LjVWNWg0VjF6TTUgNkgxdjRoNHptMSA0aDRWNkg2em0tMSAxSDF2My41YS41LjUgMCAwIDAgLjUuNUg1em0xIDB2NGg0di00em01IDB2NGgzLjVhLjUuNSAwIDAgMCAuNS0uNVYxMXptMC0xaDRWNmgtNHptMC01aDRWMS41YS41LjUgMCAwIDAtLjUtLjVIMTF6bS0xIDBWMUg2djR6Ii8+Cjwvc3ZnPg==)*/
const Grid3x3: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="grid-3x3"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5V5h4V1zM5 6H1v4h4zm1 4h4V6H6zm-1 1H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4v-4zm5 0v4h3.5a.5.5 0 0 0 .5-.5V11zm0-1h4V6h-4zm0-5h4V1.5a.5.5 0 0 0-.5-.5H11zm-1 0V1H6v4z"/>
</svg>
      )}
    />
  );

export default Grid3x3;

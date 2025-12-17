import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-door](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC4zNTQgMS4xNDZhLjUuNSAwIDAgMC0uNzA4IDBsLTYgNkEuNS41IDAgMCAwIDEuNSA3LjV2N2EuNS41IDAgMCAwIC41LjVoNC41YS41LjUgMCAwIDAgLjUtLjV2LTRoMnY0YS41LjUgMCAwIDAgLjUuNUgxNGEuNS41IDAgMCAwIC41LS41di03YS41LjUgMCAwIDAtLjE0Ni0uMzU0TDEzIDUuNzkzVjIuNWEuNS41IDAgMCAwLS41LS41aC0xYS41LjUgMCAwIDAtLjUuNXYxLjI5M3pNMi41IDE0VjcuNzA3bDUuNS01LjUgNS41IDUuNVYxNEgxMHYtNGEuNS41IDAgMCAwLS41LS41aC0zYS41LjUgMCAwIDAtLjUuNXY0eiIvPgo8L3N2Zz4=)*/
const HouseDoor: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-door"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
</svg>
      )}
    />
  );

export default HouseDoor;

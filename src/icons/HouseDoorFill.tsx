import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![house-door-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDE0LjV2LTMuNTA1YzAtLjI0NS4yNS0uNDk1LjUtLjQ5NWgyYy4yNSAwIC41LjI1LjUuNXYzLjVhLjUuNSAwIDAgMCAuNS41aDRhLjUuNSAwIDAgMCAuNS0uNXYtN2EuNS41IDAgMCAwLS4xNDYtLjM1NEwxMyA1Ljc5M1YyLjVhLjUuNSAwIDAgMC0uNS0uNWgtMWEuNS41IDAgMCAwLS41LjV2MS4yOTNMOC4zNTQgMS4xNDZhLjUuNSAwIDAgMC0uNzA4IDBsLTYgNkEuNS41IDAgMCAwIDEuNSA3LjV2N2EuNS41IDAgMCAwIC41LjVoNGEuNS41IDAgMCAwIC41LS41Ii8+Cjwvc3ZnPg==)*/
const HouseDoorFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="house-door-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>
      )}
    />
  );

export default HouseDoorFill;

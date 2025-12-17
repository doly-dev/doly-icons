import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![door-open-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMS41IDE1YS41LjUgMCAwIDAgMCAxaDEzYS41LjUgMCAwIDAgMC0xSDEzVjIuNUExLjUgMS41IDAgMCAwIDExLjUgMUgxMVYuNWEuNS41IDAgMCAwLS41Ny0uNDk1bC03IDFBLjUuNSAwIDAgMCAzIDEuNVYxNXpNMTEgMmguNWEuNS41IDAgMCAxIC41LjVWMTVoLTF6bS0yLjUgOGMtLjI3NiAwLS41LS40NDgtLjUtMXMuMjI0LTEgLjUtMSAuNS40NDguNSAxLS4yMjQgMS0uNSAxIi8+Cjwvc3ZnPg==)*/
const DoorOpenFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="door-open-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15zM11 2h.5a.5.5 0 0 1 .5.5V15h-1zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1"/>
</svg>
      )}
    />
  );

export default DoorOpenFill;

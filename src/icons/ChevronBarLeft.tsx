import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-bar-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS44NTQgMy42NDZhLjUuNSAwIDAgMSAwIC43MDhMOC4yMDcgOGwzLjY0NyAzLjY0NmEuNS41IDAgMCAxLS43MDguNzA4bC00LTRhLjUuNSAwIDAgMSAwLS43MDhsNC00YS41LjUgMCAwIDEgLjcwOCAwTTQuNSAxYS41LjUgMCAwIDAtLjUuNXYxM2EuNS41IDAgMCAwIDEgMHYtMTNhLjUuNSAwIDAgMC0uNS0uNSIvPgo8L3N2Zz4=)*/
const ChevronBarLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-bar-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default ChevronBarLeft;

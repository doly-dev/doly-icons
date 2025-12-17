import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-expand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjY0NiA5LjE0NmEuNS41IDAgMCAxIC43MDggMEw4IDEyLjc5M2wzLjY0Ni0zLjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC00IDRhLjUuNSAwIDAgMS0uNzA4IDBsLTQtNGEuNS41IDAgMCAxIDAtLjcwOG0wLTIuMjkyYS41LjUgMCAwIDAgLjcwOCAwTDggMy4yMDdsMy42NDYgMy42NDdhLjUuNSAwIDAgMCAuNzA4LS43MDhsLTQtNGEuNS41IDAgMCAwLS43MDggMGwtNCA0YS41LjUgMCAwIDAgMCAuNzA4Ii8+Cjwvc3ZnPg==)*/
const ChevronExpand: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-expand"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708"/>
</svg>
      )}
    />
  );

export default ChevronExpand;

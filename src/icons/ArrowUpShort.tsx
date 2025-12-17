import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up-short](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDEyYS41LjUgMCAwIDAgLjUtLjVWNS43MDdsMi4xNDYgMi4xNDdhLjUuNSAwIDAgMCAuNzA4LS43MDhsLTMtM2EuNS41IDAgMCAwLS43MDggMGwtMyAzYS41LjUgMCAxIDAgLjcwOC43MDhMNy41IDUuNzA3VjExLjVhLjUuNSAwIDAgMCAuNS41Ii8+Cjwvc3ZnPg==)*/
const ArrowUpShort: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-short"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5"/>
</svg>
      )}
    />
  );

export default ArrowUpShort;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE1YS41LjUgMCAwIDAgLjUtLjVWMi43MDdsMy4xNDYgMy4xNDdhLjUuNSAwIDAgMCAuNzA4LS43MDhsLTQtNGEuNS41IDAgMCAwLS43MDggMGwtNCA0YS41LjUgMCAxIDAgLjcwOC43MDhMNy41IDIuNzA3VjE0LjVhLjUuNSAwIDAgMCAuNS41Ii8+Cjwvc3ZnPg==)*/
const ArrowUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
</svg>
      )}
    />
  );

export default ArrowUp;

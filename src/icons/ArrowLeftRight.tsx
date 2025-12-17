import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-left-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDExLjVhLjUuNSAwIDAgMCAuNS41aDExLjc5M2wtMy4xNDcgMy4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOGw0LTRhLjUuNSAwIDAgMCAwLS43MDhsLTQtNGEuNS41IDAgMCAwLS43MDguNzA4TDEzLjI5MyAxMUgxLjVhLjUuNSAwIDAgMC0uNS41bTE0LTdhLjUuNSAwIDAgMS0uNS41SDIuNzA3bDMuMTQ3IDMuMTQ2YS41LjUgMCAxIDEtLjcwOC43MDhsLTQtNGEuNS41IDAgMCAxIDAtLjcwOGw0LTRhLjUuNSAwIDEgMSAuNzA4LjcwOEwyLjcwNyA0SDE0LjVhLjUuNSAwIDAgMSAuNS41Ii8+Cjwvc3ZnPg==)*/
const ArrowLeftRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-left-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
</svg>
      )}
    />
  );

export default ArrowLeftRight;

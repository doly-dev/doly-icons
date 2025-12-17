import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-left-short](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiA4YS41LjUgMCAwIDEtLjUuNUg1LjcwN2wyLjE0NyAyLjE0NmEuNS41IDAgMCAxLS43MDguNzA4bC0zLTNhLjUuNSAwIDAgMSAwLS43MDhsMy0zYS41LjUgMCAxIDEgLjcwOC43MDhMNS43MDcgNy41SDExLjVhLjUuNSAwIDAgMSAuNS41Ii8+Cjwvc3ZnPg==)*/
const ArrowLeftShort: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-left-short"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg>
      )}
    />
  );

export default ArrowLeftShort;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-left-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDhhNyA3IDAgMSAwIDE0IDBBNyA3IDAgMCAwIDEgOG0xNSAwQTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBtLTQuNS0uNWEuNS41IDAgMCAxIDAgMUg1LjcwN2wyLjE0NyAyLjE0NmEuNS41IDAgMCAxLS43MDguNzA4bC0zLTNhLjUuNSAwIDAgMSAwLS43MDhsMy0zYS41LjUgMCAxIDEgLjcwOC43MDhMNS43MDcgNy41eiIvPgo8L3N2Zz4=)*/
const ArrowLeftCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-left-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
</svg>
      )}
    />
  );

export default ArrowLeftCircle;

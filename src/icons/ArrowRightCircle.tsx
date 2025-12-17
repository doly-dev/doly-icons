import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-right-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDhhNyA3IDAgMSAwIDE0IDBBNyA3IDAgMCAwIDEgOG0xNSAwQTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBNNC41IDcuNWEuNS41IDAgMCAwIDAgMWg1Ljc5M2wtMi4xNDcgMi4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOGwzLTNhLjUuNSAwIDAgMCAwLS43MDhsLTMtM2EuNS41IDAgMSAwLS43MDguNzA4TDEwLjI5MyA3LjV6Ii8+Cjwvc3ZnPg==)*/
const ArrowRightCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-right-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
</svg>
      )}
    />
  );

export default ArrowRightCircle;

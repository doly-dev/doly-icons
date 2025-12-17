import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-return-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC41IDEuNWEuNS41IDAgMCAxIC41LjV2NC44YTIuNSAyLjUgMCAwIDEtMi41IDIuNUgyLjcwN2wzLjM0NyAzLjM0NmEuNS41IDAgMCAxLS43MDguNzA4bC00LjItNC4yYS41LjUgMCAwIDEgMC0uNzA4bDQtNGEuNS41IDAgMSAxIC43MDguNzA4TDIuNzA3IDguM0gxMi41QTEuNSAxLjUgMCAwIDAgMTQgNi44VjJhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const ArrowReturnLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-return-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default ArrowReturnLeft;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-90deg-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjE0NiA0Ljg1NGEuNS41IDAgMCAxIDAtLjcwOGw0LTRhLjUuNSAwIDEgMSAuNzA4LjcwOEwyLjcwNyA0SDEyLjVBMi41IDIuNSAwIDAgMSAxNSA2LjV2OGEuNS41IDAgMCAxLTEgMHYtOEExLjUgMS41IDAgMCAwIDEyLjUgNUgyLjcwN2wzLjE0NyAzLjE0NmEuNS41IDAgMSAxLS43MDguNzA4eiIvPgo8L3N2Zz4=)*/
const Arrow90degLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-90deg-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708z"/>
</svg>
      )}
    />
  );

export default Arrow90degLeft;

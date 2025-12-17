import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![x-lg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi4xNDYgMi44NTRhLjUuNSAwIDEgMSAuNzA4LS43MDhMOCA3LjI5M2w1LjE0Ni01LjE0N2EuNS41IDAgMCAxIC43MDguNzA4TDguNzA3IDhsNS4xNDcgNS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDguNzA3bC01LjE0NiA1LjE0N2EuNS41IDAgMCAxLS43MDgtLjcwOEw3LjI5MyA4eiIvPgo8L3N2Zz4=)*/
const XLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="x-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
      )}
    />
  );

export default XLg;

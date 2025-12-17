import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check2-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDhhNS41IDUuNSAwIDAgMSA4LjI1LTQuNzY0LjUuNSAwIDAgMCAuNS0uODY2QTYuNSA2LjUgMCAxIDAgMTQuNSA4YS41LjUgMCAwIDAtMSAwIDUuNSA1LjUgMCAxIDEtMTEgMCIvPgogIDxwYXRoIGQ9Ik0xNS4zNTQgMy4zNTRhLjUuNSAwIDAgMC0uNzA4LS43MDhMOCA5LjI5MyA1LjM1NCA2LjY0NmEuNS41IDAgMSAwLS43MDguNzA4bDMgM2EuNS41IDAgMCAwIC43MDggMHoiLz4KPC9zdmc+)*/
const Check2Circle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check2-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
</svg>
      )}
    />
  );

export default Check2Circle;

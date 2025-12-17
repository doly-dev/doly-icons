import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-bar-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDMuNWEuNS41IDAgMCAxIC41LS41aDEzYS41LjUgMCAwIDEgMCAxaC0xM2EuNS41IDAgMCAxLS41LS41TTggNmEuNS41IDAgMCAxIC41LjV2NS43OTNsMi4xNDYtMi4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtMyAzYS41LjUgMCAwIDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDEyLjI5M1Y2LjVBLjUuNSAwIDAgMSA4IDYiLz4KPC9zdmc+)*/
const ArrowBarDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-bar-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"/>
</svg>
      )}
    />
  );

export default ArrowBarDown;

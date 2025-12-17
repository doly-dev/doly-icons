import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-expand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xIDhhLjUuNSAwIDAgMSAuNS0uNWgxM2EuNS41IDAgMCAxIDAgMWgtMTNBLjUuNSAwIDAgMSAxIDhNNy42NDYuMTQ2YS41LjUgMCAwIDEgLjcwOCAwbDIgMmEuNS41IDAgMCAxLS43MDguNzA4TDguNSAxLjcwN1Y1LjVhLjUuNSAwIDAgMS0xIDBWMS43MDdMNi4zNTQgMi44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDh6TTggMTBhLjUuNSAwIDAgMSAuNS41djMuNzkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDggMGwtMi0yYS41LjUgMCAwIDEgLjcwOC0uNzA4TDcuNSAxNC4yOTNWMTAuNUEuNS41IDAgMCAxIDggMTAiLz4KPC9zdmc+)*/
const ArrowsExpand: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-expand"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10"/>
</svg>
      )}
    />
  );

export default ArrowsExpand;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![chevron-bar-expand](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjY0NiAxMC4xNDZhLjUuNSAwIDAgMSAuNzA4IDBMOCAxMy43OTNsMy42NDYtMy42NDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtNCA0YS41LjUgMCAwIDEtLjcwOCAwbC00LTRhLjUuNSAwIDAgMSAwLS43MDhtMC00LjI5MmEuNS41IDAgMCAwIC43MDggMEw4IDIuMjA3bDMuNjQ2IDMuNjQ3YS41LjUgMCAwIDAgLjcwOC0uNzA4bC00LTRhLjUuNSAwIDAgMC0uNzA4IDBsLTQgNGEuNS41IDAgMCAwIDAgLjcwOE0xIDhhLjUuNSAwIDAgMSAuNS0uNWgxM2EuNS41IDAgMCAxIDAgMWgtMTNBLjUuNSAwIDAgMSAxIDgiLz4KPC9zdmc+)*/
const ChevronBarExpand: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-bar-expand"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.646 10.146a.5.5 0 0 1 .708 0L8 13.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708m0-4.292a.5.5 0 0 0 .708 0L8 2.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8"/>
</svg>
      )}
    />
  );

export default ChevronBarExpand;

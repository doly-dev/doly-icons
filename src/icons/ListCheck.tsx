import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![list-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik01IDExLjVhLjUuNSAwIDAgMSAuNS0uNWg5YS41LjUgMCAwIDEgMCAxaC05YS41LjUgMCAwIDEtLjUtLjVtMC00YS41LjUgMCAwIDEgLjUtLjVoOWEuNS41IDAgMCAxIDAgMWgtOWEuNS41IDAgMCAxLS41LS41bTAtNGEuNS41IDAgMCAxIC41LS41aDlhLjUuNSAwIDAgMSAwIDFoLTlhLjUuNSAwIDAgMS0uNS0uNU0zLjg1NCAyLjE0NmEuNS41IDAgMCAxIDAgLjcwOGwtMS41IDEuNWEuNS41IDAgMCAxLS43MDggMGwtLjUtLjVhLjUuNSAwIDEgMSAuNzA4LS43MDhMMiAzLjI5M2wxLjE0Ni0xLjE0N2EuNS41IDAgMCAxIC43MDggMG0wIDRhLjUuNSAwIDAgMSAwIC43MDhsLTEuNSAxLjVhLjUuNSAwIDAgMS0uNzA4IDBsLS41LS41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDIgNy4yOTNsMS4xNDYtMS4xNDdhLjUuNSAwIDAgMSAuNzA4IDBtMCA0YS41LjUgMCAwIDEgMCAuNzA4bC0xLjUgMS41YS41LjUgMCAwIDEtLjcwOCAwbC0uNS0uNWEuNS41IDAgMCAxIC43MDgtLjcwOGwuMTQ2LjE0NyAxLjE0Ni0xLjE0N2EuNS41IDAgMCAxIC43MDggMCIvPgo8L3N2Zz4=)*/
const ListCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="list-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0m0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default ListCheck;

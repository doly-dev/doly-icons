import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![vector-pen](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC42NDYuNjQ2YS41LjUgMCAwIDEgLjcwOCAwbDQgNGEuNS41IDAgMCAxIDAgLjcwOGwtMS45MDIgMS45MDItLjgyOSAzLjMxM2ExLjUgMS41IDAgMCAxLTEuMDI0IDEuMDczTDEuMjU0IDE0Ljc0NiA0LjM1OCA0LjRBMS41IDEuNSAwIDAgMSA1LjQzIDMuMzc3bDMuMzEzLS44Mjh6bS0xLjggMi45MDgtMy4xNzMuNzkzYS41LjUgMCAwIDAtLjM1OC4zNDJsLTIuNTcgOC41NjUgOC41NjctMi41N2EuNS41IDAgMCAwIC4zNC0uMzU3bC43OTQtMy4xNzQtMy42LTMuNnoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjgzMiAxMy4yMjggOCA5YTEgMSAwIDEgMC0xLTFsLTQuMjI4IDUuMTY4LS4wMjYuMDg2eiIvPgo8L3N2Zz4=)*/
const VectorPen: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="vector-pen"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
  <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086z"/>
</svg>
      )}
    />
  );

export default VectorPen;

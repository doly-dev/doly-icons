import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![x-octagon-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNDYuMTQ2QS41LjUgMCAwIDAgMTEuMTA3IDBINC44OTNhLjUuNSAwIDAgMC0uMzUzLjE0NkwuMTQ2IDQuNTRBLjUuNSAwIDAgMCAwIDQuODkzdjYuMjE0YS41LjUgMCAwIDAgLjE0Ni4zNTNsNC4zOTQgNC4zOTRhLjUuNSAwIDAgMCAuMzUzLjE0Nmg2LjIxNGEuNS41IDAgMCAwIC4zNTMtLjE0Nmw0LjM5NC00LjM5NGEuNS41IDAgMCAwIC4xNDYtLjM1M1Y0Ljg5M2EuNS41IDAgMCAwLS4xNDYtLjM1M3ptLTYuMTA2IDQuNUw4IDcuMjkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhMOC43MDcgOGwyLjY0NyAyLjY0NmEuNS41IDAgMCAxLS43MDguNzA4TDggOC43MDdsLTIuNjQ2IDIuNjQ3YS41LjUgMCAwIDEtLjcwOC0uNzA4TDcuMjkzIDggNC42NDYgNS4zNTRhLjUuNSAwIDEgMSAuNzA4LS43MDgiLz4KPC9zdmc+)*/
const XOctagonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="x-octagon-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
</svg>
      )}
    />
  );

export default XOctagonFill;

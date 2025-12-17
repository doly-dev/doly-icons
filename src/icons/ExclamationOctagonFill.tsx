import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclamation-octagon-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNDYuMTQ2QS41LjUgMCAwIDAgMTEuMTA3IDBINC44OTNhLjUuNSAwIDAgMC0uMzUzLjE0NkwuMTQ2IDQuNTRBLjUuNSAwIDAgMCAwIDQuODkzdjYuMjE0YS41LjUgMCAwIDAgLjE0Ni4zNTNsNC4zOTQgNC4zOTRhLjUuNSAwIDAgMCAuMzUzLjE0Nmg2LjIxNGEuNS41IDAgMCAwIC4zNTMtLjE0Nmw0LjM5NC00LjM5NGEuNS41IDAgMCAwIC4xNDYtLjM1M1Y0Ljg5M2EuNS41IDAgMCAwLS4xNDYtLjM1M3pNOCA0Yy41MzUgMCAuOTU0LjQ2Mi45Ljk5NWwtLjM1IDMuNTA3YS41NTIuNTUyIDAgMCAxLTEuMSAwTDcuMSA0Ljk5NUEuOTA1LjkwNSAwIDAgMSA4IDRtLjAwMiA2YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMiIvPgo8L3N2Zz4=)*/
const ExclamationOctagonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation-octagon-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
      )}
    />
  );

export default ExclamationOctagonFill;

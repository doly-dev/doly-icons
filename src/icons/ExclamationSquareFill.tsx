import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclamation-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptNiA0Yy41MzUgMCAuOTU0LjQ2Mi45Ljk5NWwtLjM1IDMuNTA3YS41NTIuNTUyIDAgMCAxLTEuMSAwTDcuMSA0Ljk5NUEuOTA1LjkwNSAwIDAgMSA4IDRtLjAwMiA2YTEgMSAwIDEgMSAwIDIgMSAxIDAgMCAxIDAtMiIvPgo8L3N2Zz4=)*/
const ExclamationSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
      )}
    />
  );

export default ExclamationSquareFill;

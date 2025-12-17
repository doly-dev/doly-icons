import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-plus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiA4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNm0yLTNhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwbTQgOGMwIDEtMSAxLTEgMUgxcy0xIDAtMS0xIDEtNCA2LTQgNiAzIDYgNG0tMS0uMDA0Yy0uMDAxLS4yNDYtLjE1NC0uOTg2LS44MzItMS42NjRDOS41MTYgMTAuNjggOC4yODkgMTAgNiAxMHMtMy41MTYuNjgtNC4xNjggMS4zMzJjLS42NzguNjc4LS44MyAxLjQxOC0uODMyIDEuNjY0eiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgNWEuNS41IDAgMCAxIC41LjVWN2gxLjVhLjUuNSAwIDAgMSAwIDFIMTR2MS41YS41LjUgMCAwIDEtMSAwVjhoLTEuNWEuNS41IDAgMCAxIDAtMUgxM1Y1LjVhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const PersonPlus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-plus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
  <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default PersonPlus;

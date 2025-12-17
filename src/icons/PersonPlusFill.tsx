import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-plus-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAxNHMtMSAwLTEtMSAxLTQgNi00IDYgMyA2IDQtMSAxLTEgMXptNS02YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgNWEuNS41IDAgMCAxIC41LjVWN2gxLjVhLjUuNSAwIDAgMSAwIDFIMTR2MS41YS41LjUgMCAwIDEtMSAwVjhoLTEuNWEuNS41IDAgMCAxIDAtMUgxM1Y1LjVhLjUuNSAwIDAgMSAuNS0uNSIvPgo8L3N2Zz4=)*/
const PersonPlusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-plus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default PersonPlusFill;

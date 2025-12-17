import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![ui-radios-grid](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDE1YTIuNSAyLjUgMCAxIDAgMC01IDIuNSAyLjUgMCAwIDAgMCA1bTktOWEyLjUgMi41IDAgMSAwIDAtNSAyLjUgMi41IDAgMCAwIDAgNW0wIDlhMi41IDIuNSAwIDEgMSAwLTUgMi41IDIuNSAwIDAgMSAwIDVNMTYgMy41YTMuNSAzLjUgMCAxIDEtNyAwIDMuNSAzLjUgMCAwIDEgNyAwbS05IDlhMy41IDMuNSAwIDEgMS03IDAgMy41IDMuNSAwIDAgMSA3IDBtNS41IDMuNWEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20tOS0xMWExLjUgMS41IDAgMSAxIDAtMyAxLjUgMS41IDAgMCAxIDAgM20wIDJhMy41IDMuNSAwIDEgMCAwLTcgMy41IDMuNSAwIDAgMCAwIDciLz4KPC9zdmc+)*/
const UiRadiosGrid: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ui-radios-grid"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>
      )}
    />
  );

export default UiRadiosGrid;

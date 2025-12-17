import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suit-club-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNSAxMi41YTMuNSAzLjUgMCAwIDEtMi42ODQtMS4yNTQgMjAgMjAgMCAwIDAgMS41ODIgMi45MDdjLjIzMS4zNS0uMDIuODQ3LS40MzguODQ3SDYuMDRjLS40MTkgMC0uNjctLjQ5Ny0uNDM4LS44NDdhMjAgMjAgMCAwIDAgMS41ODItMi45MDcgMy41IDMuNSAwIDEgMS0yLjUzOC01Ljc0MyAzLjUgMy41IDAgMSAxIDYuNzA4IDBBMy41IDMuNSAwIDEgMSAxMS41IDEyLjUiLz4KPC9zdmc+)*/
const SuitClubFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suit-club-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.5 12.5a3.5 3.5 0 0 1-2.684-1.254 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907 3.5 3.5 0 1 1-2.538-5.743 3.5 3.5 0 1 1 6.708 0A3.5 3.5 0 1 1 11.5 12.5"/>
</svg>
      )}
    />
  );

export default SuitClubFill;

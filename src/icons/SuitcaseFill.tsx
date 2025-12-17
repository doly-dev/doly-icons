import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suitcase-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAuNWEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAuNS41VjNoMS41QTEuNSAxLjUgMCAwIDEgMTMgNC41djlhMS41IDEuNSAwIDAgMS0xLjAwNCAxLjQxNkExIDEgMCAxIDEgMTAgMTVINmExIDEgMCAxIDEtMS45OTctLjA4NEExLjUgMS41IDAgMCAxIDMgMTMuNXYtOUExLjUgMS41IDAgMCAxIDQuNSAzSDZ6TTkgMUg3djJoMnpNNiA1LjVhLjUuNSAwIDAgMC0xIDB2N2EuNS41IDAgMCAwIDEgMHptMi41IDBhLjUuNSAwIDAgMC0xIDB2N2EuNS41IDAgMCAwIDEgMHptMi41IDBhLjUuNSAwIDAgMC0xIDB2N2EuNS41IDAgMCAwIDEgMHoiLz4KPC9zdmc+)*/
const SuitcaseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suitcase-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V3h1.5A1.5 1.5 0 0 1 13 4.5v9a1.5 1.5 0 0 1-1.004 1.416A1 1 0 1 1 10 15H6a1 1 0 1 1-1.997-.084A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3H6zM9 1H7v2h2zM6 5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0z"/>
</svg>
      )}
    />
  );

export default SuitcaseFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![qr-code-scan](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAuNUEuNS41IDAgMCAxIC41IDBoM2EuNS41IDAgMCAxIDAgMUgxdjIuNWEuNS41IDAgMCAxLTEgMHptMTIgMGEuNS41IDAgMCAxIC41LS41aDNhLjUuNSAwIDAgMSAuNS41djNhLjUuNSAwIDAgMS0xIDBWMWgtMi41YS41LjUgMCAwIDEtLjUtLjVNLjUgMTJhLjUuNSAwIDAgMSAuNS41VjE1aDIuNWEuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxLS41LS41di0zYS41LjUgMCAwIDEgLjUtLjVtMTUgMGEuNS41IDAgMCAxIC41LjV2M2EuNS41IDAgMCAxLS41LjVoLTNhLjUuNSAwIDAgMSAwLTFIMTV2LTIuNWEuNS41IDAgMCAxIC41LS41TTQgNGgxdjFINHoiLz4KICA8cGF0aCBkPSJNNyAySDJ2NWg1ek0zIDNoM3YzSDN6bTIgOEg0djFoMXoiLz4KICA8cGF0aCBkPSJNNyA5SDJ2NWg1em0tNCAxaDN2M0gzem04LTZoMXYxaC0xeiIvPgogIDxwYXRoIGQ9Ik05IDJoNXY1SDl6bTEgMXYzaDNWM3pNOCA4djJoMXYxSDh2MWgydi0yaDF2Mmgxdi0xaDJ2LTFoLTNWOHptMiAySDlWOWgxem00IDJoLTF2MWgtMnYxaDN6bS00IDJ2LTFIOHYxeiIvPgogIDxwYXRoIGQ9Ik0xMiA5aDJWOGgtMnoiLz4KPC9zdmc+)*/
const QrCodeScan: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="qr-code-scan"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1v2.5a.5.5 0 0 1-1 0zm12 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V1h-2.5a.5.5 0 0 1-.5-.5M.5 12a.5.5 0 0 1 .5.5V15h2.5a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1 0-1H15v-2.5a.5.5 0 0 1 .5-.5M4 4h1v1H4z"/>
  <path d="M7 2H2v5h5zM3 3h3v3H3zm2 8H4v1h1z"/>
  <path d="M7 9H2v5h5zm-4 1h3v3H3zm8-6h1v1h-1z"/>
  <path d="M9 2h5v5H9zm1 1v3h3V3zM8 8v2h1v1H8v1h2v-2h1v2h1v-1h2v-1h-3V8zm2 2H9V9h1zm4 2h-1v1h-2v1h3zm-4 2v-1H8v1z"/>
  <path d="M12 9h2V8h-2z"/>
</svg>
      )}
    />
  );

export default QrCodeScan;

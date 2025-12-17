import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-play-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yTTYgNS44ODNhLjUuNSAwIDAgMSAuNzU3LS40MjlsMy41MjggMi4xMTdhLjUuNSAwIDAgMSAwIC44NThsLTMuNTI4IDIuMTE3YS41LjUgMCAwIDEtLjc1Ny0uNDNWNS44ODR6Ii8+Cjwvc3ZnPg==)*/
const FilePlayFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-play-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M6 5.883a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43V5.884z"/>
</svg>
      )}
    />
  );

export default FilePlayFill;

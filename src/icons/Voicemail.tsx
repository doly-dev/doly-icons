import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![voicemail](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA4LjVBMy41IDMuNSAwIDAgMSA1Ljk1IDExaDQuMWEzLjUgMy41IDAgMSAxIDIuNDUgMWgtOUEzLjUgMy41IDAgMSAxIDcgOC41bS02IDBhMi41IDIuNSAwIDEgMCA1IDAgMi41IDIuNSAwIDAgMC01IDBtMTQgMGEyLjUgMi41IDAgMSAwLTUgMCAyLjUgMi41IDAgMCAwIDUgMCIvPgo8L3N2Zz4=)*/
const Voicemail: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="voicemail"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 8.5A3.5 3.5 0 0 1 5.95 11h4.1a3.5 3.5 0 1 1 2.45 1h-9A3.5 3.5 0 1 1 7 8.5m-6 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m14 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0"/>
</svg>
      )}
    />
  );

export default Voicemail;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclamation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4wMDIgMTFhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwTTcuMSA0Ljk5NWEuOTA1LjkwNSAwIDEgMSAxLjggMGwtLjM1IDMuNTA3YS41NTMuNTUzIDAgMCAxLTEuMSAweiIvPgo8L3N2Zz4=)*/
const Exclamation: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z"/>
</svg>
      )}
    />
  );

export default Exclamation;

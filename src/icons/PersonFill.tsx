import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAxNHMtMSAwLTEtMSAxLTQgNi00IDYgMyA2IDQtMSAxLTEgMXptNS02YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNiIvPgo8L3N2Zz4=)*/
const PersonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
      )}
    />
  );

export default PersonFill;

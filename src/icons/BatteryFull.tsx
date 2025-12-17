import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![battery-full](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiA2aDEwdjRIMnoiLz4KICA8cGF0aCBkPSJNMiA0YTIgMiAwIDAgMC0yIDJ2NGEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJWNmEyIDIgMCAwIDAtMi0yem0xMCAxYTEgMSAwIDAgMSAxIDF2NGExIDEgMCAwIDEtMSAxSDJhMSAxIDAgMCAxLTEtMVY2YTEgMSAwIDAgMSAxLTF6bTQgM2ExLjUgMS41IDAgMCAxLTEuNSAxLjV2LTNBMS41IDEuNSAwIDAgMSAxNiA4Ii8+Cjwvc3ZnPg==)*/
const BatteryFull: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="battery-full"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 6h10v4H2z"/>
  <path d="M2 4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm10 1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4 3a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8"/>
</svg>
      )}
    />
  );

export default BatteryFull;

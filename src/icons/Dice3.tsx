import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![dice-3](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMgMWEyIDIgMCAwIDEgMiAydjEwYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjNhMiAyIDAgMCAxIDItMnpNMyAwYTMgMyAwIDAgMC0zIDN2MTBhMyAzIDAgMCAwIDMgM2gxMGEzIDMgMCAwIDAgMy0zVjNhMyAzIDAgMCAwLTMtM3oiLz4KICA8cGF0aCBkPSJNNS41IDRhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBtOCA4YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwbS00LTRhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDAiLz4KPC9zdmc+)*/
const Dice3: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dice-3"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
      )}
    />
  );

export default Dice3;

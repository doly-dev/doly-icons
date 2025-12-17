import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0YTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnY4YTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXYuMjE3bDcgNC4yIDctNC4yVjRhMSAxIDAgMCAwLTEtMXptMTMgMi4zODMtNC43MDggMi44MjVMMTUgMTEuMTA1em0tLjAzNCA2Ljg3Ni01LjY0LTMuNDcxTDggOS41ODNsLTEuMzI2LS43OTUtNS42NCAzLjQ3QTEgMSAwIDAgMCAyIDEzaDEyYTEgMSAwIDAgMCAuOTY2LS43NDFNMSAxMS4xMDVsNC43MDgtMi44OTdMMSA1LjM4M3oiLz4KPC9zdmc+)*/
const Envelope: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
      )}
    />
  );

export default Envelope;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-open-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC45NDEuNDM1YTIgMiAwIDAgMC0xLjg4MiAwbC02IDMuMkEyIDIgMCAwIDAgMCA1LjR2LjMxNGw2LjcwOSAzLjkzMkw4IDguOTI4bDEuMjkxLjcxOEwxNiA1LjcxNFY1LjRhMiAyIDAgMCAwLTEuMDU5LTEuNzY1ek0xNiA2Ljg3M2wtNS42OTMgMy4zMzdMMTYgMTMuMzcydi02LjVabS0uMDU5IDcuNjExTDggMTAuMDcyLjA1OSAxNC40ODRBMiAyIDAgMCAwIDIgMTZoMTJhMiAyIDAgMCAwIDEuOTQxLTEuNTE2TTAgMTMuMzczbDUuNjkzLTMuMTYzTDAgNi44NzN6Ii8+Cjwvc3ZnPg==)*/
const EnvelopeOpenFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-open-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.941.435a2 2 0 0 0-1.882 0l-6 3.2A2 2 0 0 0 0 5.4v.314l6.709 3.932L8 8.928l1.291.718L16 5.714V5.4a2 2 0 0 0-1.059-1.765zM16 6.873l-5.693 3.337L16 13.372v-6.5Zm-.059 7.611L8 10.072.059 14.484A2 2 0 0 0 2 16h12a2 2 0 0 0 1.941-1.516M0 13.373l5.693-3.163L0 6.873z"/>
</svg>
      )}
    />
  );

export default EnvelopeOpenFill;

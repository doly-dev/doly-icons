import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pass-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAgMGEyIDIgMCAxIDEtNCAwSDMuNUExLjUgMS41IDAgMCAwIDIgMS41djEzQTEuNSAxLjUgMCAwIDAgMy41IDE2aDlhMS41IDEuNSAwIDAgMCAxLjUtMS41di0xM0ExLjUgMS41IDAgMCAwIDEyLjUgMHpNNC41IDVoN2EuNS41IDAgMCAxIDAgMWgtN2EuNS41IDAgMCAxIDAtMW0wIDJoNGEuNS41IDAgMCAxIDAgMWgtNGEuNS41IDAgMCAxIDAtMSIvPgo8L3N2Zz4=)*/
const PassFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pass-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0zM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default PassFill;

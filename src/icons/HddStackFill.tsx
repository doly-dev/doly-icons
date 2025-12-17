import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hdd-stack-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiA5YTIgMiAwIDAgMC0yIDJ2MWEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJ2LTFhMiAyIDAgMCAwLTItMnptLjUgM2EuNS41IDAgMSAxIDAtMSAuNS41IDAgMCAxIDAgMW0yIDBhLjUuNSAwIDEgMSAwLTEgLjUuNSAwIDAgMSAwIDFNMiAyYTIgMiAwIDAgMC0yIDJ2MWEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMi0yem0uNSAzYS41LjUgMCAxIDEgMC0xIC41LjUgMCAwIDEgMCAxbTIgMGEuNS41IDAgMSAxIDAtMSAuNS41IDAgMCAxIDAgMSIvPgo8L3N2Zz4=)*/
const HddStackFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hdd-stack-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1"/>
</svg>
      )}
    />
  );

export default HddStackFill;

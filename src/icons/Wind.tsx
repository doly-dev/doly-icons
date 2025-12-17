import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wind](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSAyQTIuNSAyLjUgMCAwIDAgMTAgNC41YS41LjUgMCAwIDEtMSAwQTMuNSAzLjUgMCAxIDEgMTIuNSA4SC41YS41LjUgMCAwIDEgMC0xaDEyYTIuNSAyLjUgMCAwIDAgMC01bS03IDFhMSAxIDAgMCAwLTEgMSAuNS41IDAgMCAxLTEgMCAyIDIgMCAxIDEgMiAyaC01YS41LjUgMCAwIDEgMC0xaDVhMSAxIDAgMCAwIDAtMk0wIDkuNUEuNS41IDAgMCAxIC41IDloMTAuMDQyYTMgMyAwIDEgMS0zIDMgLjUuNSAwIDAgMSAxIDAgMiAyIDAgMSAwIDItMkguNWEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const Wind: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wind"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5m-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2M0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default Wind;

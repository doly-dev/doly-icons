import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![laptop](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuNSAzYS41LjUgMCAwIDEgLjUuNVYxMUgyVjMuNWEuNS41IDAgMCAxIC41LS41em0tMTEtMUExLjUgMS41IDAgMCAwIDEgMy41VjEyaDE0VjMuNUExLjUgMS41IDAgMCAwIDEzLjUgMnpNMCAxMi41aDE2YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTNBMS41IDEuNSAwIDAgMSAwIDEyLjUiLz4KPC9zdmc+)*/
const Laptop: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="laptop"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>
      )}
    />
  );

export default Laptop;

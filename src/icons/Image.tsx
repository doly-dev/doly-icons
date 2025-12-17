import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![image](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4wMDIgNS41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwIi8+CiAgPHBhdGggZD0iTTIuMDAyIDFhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWM2EyIDIgMCAwIDAtMi0yem0xMiAxYTEgMSAwIDAgMSAxIDF2Ni41bC0zLjc3Ny0xLjk0N2EuNS41IDAgMCAwLS41NzcuMDkzbC0zLjcxIDMuNzEtMi42Ni0xLjc3MmEuNS41IDAgMCAwLS42My4wNjJMMS4wMDIgMTJWM2ExIDEgMCAwIDEgMS0xeiIvPgo8L3N2Zz4=)*/
const Image: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="image"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1z"/>
</svg>
      )}
    />
  );

export default Image;

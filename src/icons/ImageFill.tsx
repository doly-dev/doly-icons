import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![image-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjAwMiAzYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAyaC0xMmEyIDIgMCAwIDEtMi0yem0xIDl2MWExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTFWOS41bC0zLjc3Ny0xLjk0N2EuNS41IDAgMCAwLS41NzcuMDkzbC0zLjcxIDMuNzEtMi42Ni0xLjc3MmEuNS41IDAgMCAwLS42My4wNjJ6bTUtNi41YTEuNSAxLjUgMCAxIDAtMyAwIDEuNSAxLjUgMCAwIDAgMyAwIi8+Cjwvc3ZnPg==)*/
const ImageFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="image-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.002 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-12a2 2 0 0 1-2-2zm1 9v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062zm5-6.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
</svg>
      )}
    />
  );

export default ImageFill;

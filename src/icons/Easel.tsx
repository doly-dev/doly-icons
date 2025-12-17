import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![easel](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAwYS41LjUgMCAwIDEgLjQ3My4zMzdMOS4wNDYgMkgxNGExIDEgMCAwIDEgMSAxdjdhMSAxIDAgMCAxLTEgMWgtMS44NWwxLjMyMyAzLjgzN2EuNS41IDAgMSAxLS45NDYuMzI2TDExLjA5MiAxMUg4LjV2M2EuNS41IDAgMCAxLTEgMHYtM0g0LjkwOGwtMS40MzUgNC4xNjNhLjUuNSAwIDEgMS0uOTQ2LS4zMjZMMy44NSAxMUgyYTEgMSAwIDAgMS0xLTFWM2ExIDEgMCAwIDEgMS0xaDQuOTU0TDcuNTI3LjMzN0EuNS41IDAgMCAxIDggME0yIDN2N2gxMlYzeiIvPgo8L3N2Zz4=)*/
const Easel: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="easel"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0M2 3v7h12V3z"/>
</svg>
      )}
    />
  );

export default Easel;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sliders](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41IDJhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNNOS4wNSAzYTIuNSAyLjUgMCAwIDEgNC45IDBIMTZ2MWgtMi4wNWEyLjUgMi41IDAgMCAxLTQuOSAwSDBWM3pNNC41IDdhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNNMi4wNSA4YTIuNSAyLjUgMCAwIDEgNC45IDBIMTZ2MUg2Ljk1YTIuNSAyLjUgMCAwIDEtNC45IDBIMFY4em05LjQ1IDRhMS41IDEuNSAwIDEgMCAwIDMgMS41IDEuNSAwIDAgMCAwLTNtLTIuNDUgMWEyLjUgMi41IDAgMCAxIDQuOSAwSDE2djFoLTIuMDVhMi41IDIuNSAwIDAgMS00LjkgMEgwdi0xeiIvPgo8L3N2Zz4=)*/
const Sliders: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sliders"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"/>
</svg>
      )}
    />
  );

export default Sliders;

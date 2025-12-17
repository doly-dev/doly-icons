import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![clouds](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgNy41YTIuNSAyLjUgMCAwIDEtMS40NTYgMi4yNzIgMy41IDMuNSAwIDAgMC0uNjUtLjgyNCAxLjUgMS41IDAgMCAwLS43ODktMi44OTYuNS41IDAgMCAxLS42MjctLjQyMSAzIDMgMCAwIDAtNS4yMi0xLjYyNSA1LjYgNS42IDAgMCAwLTEuMjc2LjA4OCA0LjAwMiA0LjAwMiAwIDAgMSA3LjM5Mi45MUEyLjUgMi41IDAgMCAxIDE2IDcuNSIvPgogIDxwYXRoIGQ9Ik03IDVhNC41IDQuNSAwIDAgMSA0LjQ3MyA0aC4wMjdhMi41IDIuNSAwIDAgMSAwIDVIM2EzIDMgMCAwIDEtLjI0Ny01Ljk5QTQuNSA0LjUgMCAwIDEgNyA1bTMuNSA0LjVhMy41IDMuNSAwIDAgMC02Ljg5LS44NzMuNS41IDAgMCAxLS41MS4zNzVBMiAyIDAgMSAwIDMgMTNoOC41YTEuNSAxLjUgMCAxIDAtLjM3Ni0yLjk1My41LjUgMCAwIDEtLjYyNC0uNDkyeiIvPgo8L3N2Zz4=)*/
const Clouds: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="clouds"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.5 3.5 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.6 5.6 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5"/>
  <path d="M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.5 4.5 0 0 1 7 5m3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492z"/>
</svg>
      )}
    />
  );

export default Clouds;

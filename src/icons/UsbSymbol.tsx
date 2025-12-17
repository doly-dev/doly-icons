import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![usb-symbol](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtNy43OTIuMzEyLTEuNTMzIDIuM0EuMjUuMjUgMCAwIDAgNi40NjcgM0g3LjV2Ny4zMTlhMi41IDIuNSAwIDAgMC0uNTE1LS4yOThMNS45MDkgOS41NkExLjUgMS41IDAgMCAxIDUgOC4xOHYtLjI2NmExLjUgMS41IDAgMSAwLTEgMHYuMjY2YTIuNSAyLjUgMCAwIDAgMS41MTUgMi4yOThsMS4wNzYuNDYxYTEuNSAxLjUgMCAwIDEgLjg4OCAxLjEyOSAyLjAwMSAyLjAwMSAwIDEgMCAxLjAyMS0uMDA2di0uOTAyYTEuNSAxLjUgMCAwIDEgLjc1Ni0xLjMwM2wxLjQ4NC0uODQ4QTIuNSAyLjUgMCAwIDAgMTEuOTk1IDdoLjc1NWEuMjUuMjUgMCAwIDAgLjI1LS4yNXYtMi41YS4yNS4yNSAwIDAgMC0uMjUtLjI1aC0yLjVhLjI1LjI1IDAgMCAwLS4yNS4yNXYyLjVjMCAuMTM4LjExMi4yNS4yNS4yNWguNzQxYTEuNSAxLjUgMCAwIDEtLjc0NyAxLjE0Mkw4Ljc2IDguOTlhMyAzIDAgMCAwLS4yNi4xN1YzaDEuMDMzYS4yNS4yNSAwIDAgMCAuMjA4LS4zODlMOC4yMDguMzEyYS4yNS4yNSAwIDAgMC0uNDE2IDAiLz4KPC9zdmc+)*/
const UsbSymbol: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="usb-symbol"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m7.792.312-1.533 2.3A.25.25 0 0 0 6.467 3H7.5v7.319a2.5 2.5 0 0 0-.515-.298L5.909 9.56A1.5 1.5 0 0 1 5 8.18v-.266a1.5 1.5 0 1 0-1 0v.266a2.5 2.5 0 0 0 1.515 2.298l1.076.461a1.5 1.5 0 0 1 .888 1.129 2.001 2.001 0 1 0 1.021-.006v-.902a1.5 1.5 0 0 1 .756-1.303l1.484-.848A2.5 2.5 0 0 0 11.995 7h.755a.25.25 0 0 0 .25-.25v-2.5a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25v2.5c0 .138.112.25.25.25h.741a1.5 1.5 0 0 1-.747 1.142L8.76 8.99a3 3 0 0 0-.26.17V3h1.033a.25.25 0 0 0 .208-.389L8.208.312a.25.25 0 0 0-.416 0"/>
</svg>
      )}
    />
  );

export default UsbSymbol;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![suit-spade-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4xODQgMTEuMjQ2QTMuNSAzLjUgMCAwIDEgMSA5YzAtMS42MDIgMS4xNC0yLjYzMyAyLjY2LTQuMDA4QzQuOTg2IDMuNzkyIDYuNjAyIDIuMzMgOCAwYzEuMzk4IDIuMzMgMy4wMTQgMy43OTIgNC4zNCA0Ljk5MkMxMy44NiA2LjM2NyAxNSA3LjM5OCAxNSA5YTMuNSAzLjUgMCAwIDEtNi4xODQgMi4yNDYgMjAgMjAgMCAwIDAgMS41ODIgMi45MDdjLjIzMS4zNS0uMDIuODQ3LS40MzguODQ3SDYuMDRjLS40MTkgMC0uNjctLjQ5Ny0uNDM4LS44NDdhMjAgMjAgMCAwIDAgMS41ODItMi45MDciLz4KPC9zdmc+)*/
const SuitSpadeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="suit-spade-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.184 11.246A3.5 3.5 0 0 1 1 9c0-1.602 1.14-2.633 2.66-4.008C4.986 3.792 6.602 2.33 8 0c1.398 2.33 3.014 3.792 4.34 4.992C13.86 6.367 15 7.398 15 9a3.5 3.5 0 0 1-6.184 2.246 20 20 0 0 0 1.582 2.907c.231.35-.02.847-.438.847H6.04c-.419 0-.67-.497-.438-.847a20 20 0 0 0 1.582-2.907"/>
</svg>
      )}
    />
  );

export default SuitSpadeFill;

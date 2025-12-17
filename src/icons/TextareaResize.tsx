import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![textarea-resize](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCA0LjVBMi41IDIuNSAwIDAgMSAyLjUgMmgxMUEyLjUgMi41IDAgMCAxIDE2IDQuNXY3YTIuNSAyLjUgMCAwIDEtMi41IDIuNWgtMTFBMi41IDIuNSAwIDAgMSAwIDExLjV6TTIuNSAzQTEuNSAxLjUgMCAwIDAgMSA0LjV2N0ExLjUgMS41IDAgMCAwIDIuNSAxM2gxMWExLjUgMS41IDAgMCAwIDEuNS0xLjV2LTdBMS41IDEuNSAwIDAgMCAxMy41IDN6bTEwLjg1NCA0LjY0NmEuNS41IDAgMCAxIDAgLjcwOGwtMyAzYS41LjUgMCAwIDEtLjcwOC0uNzA4bDMtM2EuNS41IDAgMCAxIC43MDggMG0wIDIuNWEuNS41IDAgMCAxIDAgLjcwOGwtLjUuNWEuNS41IDAgMCAxLS43MDgtLjcwOGwuNS0uNWEuNS41IDAgMCAxIC43MDggMCIvPgo8L3N2Zz4=)*/
const TextareaResize: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="textarea-resize"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 4.5A2.5 2.5 0 0 1 2.5 2h11A2.5 2.5 0 0 1 16 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 11.5zM2.5 3A1.5 1.5 0 0 0 1 4.5v7A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 13.5 3zm10.854 4.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0m0 2.5a.5.5 0 0 1 0 .708l-.5.5a.5.5 0 0 1-.708-.708l.5-.5a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default TextareaResize;

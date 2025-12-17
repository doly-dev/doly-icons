import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![5-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptNS45OTQgMTIuMTU4Yy0xLjU3IDAtMi42NTQtLjkwMi0yLjcxOS0yLjExNWgxLjIzN2MuMTQuNzIuODMyIDEuMDMxIDEuNTI5IDEuMDMxLjc5MSAwIDEuNTctLjU5NyAxLjU3LTEuNjgxIDAtLjk2Ny0uNzMyLTEuNTctMS41ODItMS41Ny0uNzY3IDAtMS4yNDIuNDUtMS40MzUuODA4SDUuNDQ1TDUuNzkxIDRoNC43MDV2MS4xMDNINi44NzVsLS4xOTMgMi4zNDNoLjA2NGMuMTctLjI1OC43MTUtLjY4IDEuNjExLS42OCAxLjM4MyAwIDIuNTYxLjk0NCAyLjU2MSAyLjU4NSAwIDEuNjg3LTEuMTg0IDIuODA2LTIuOTI0IDIuODA2WiIvPgo8L3N2Zz4=)*/
const Icon5SquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="5-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>
</svg>
      )}
    />
  );

export default Icon5SquareFill;

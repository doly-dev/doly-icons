import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![c-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhtMTUgMEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTguMTQ2IDQuOTkyYy0xLjIxMiAwLTEuOTI3LjkyLTEuOTI3IDIuNTAydjEuMDZjMCAxLjU3MS43MDMgMi40NjIgMS45MjcgMi40NjIuOTc5IDAgMS42NDEtLjU4NiAxLjcyOS0xLjQxOGgxLjI5NXYuMDkzYy0uMSAxLjQ0OC0xLjM1NCAyLjQ2Ny0zLjAzIDIuNDY3LTIuMDkxIDAtMy4yNjktMS4zMzYtMy4yNjktMy42MDNWNy40ODJjMC0yLjI2MSAxLjIwMS0zLjYzOCAzLjI3LTMuNjM4IDEuNjgxIDAgMi45MzUgMS4wNTQgMy4wMjkgMi41NzJ2LjA4OEg5Ljg3NWMtLjA4OC0uODc5LS43NjgtMS41MTItMS43MjktMS41MTIiLz4KPC9zdmc+)*/
const CCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="c-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
</svg>
      )}
    />
  );

export default CCircle;

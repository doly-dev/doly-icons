import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![shield-fill-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBjLS42OSAwLTEuODQzLjI2NS0yLjkyOC41Ni0xLjExLjMtMi4yMjkuNjU1LTIuODg3Ljg3YTEuNTQgMS41NCAwIDAgMC0xLjA0NCAxLjI2MmMtLjU5NiA0LjQ3Ny43ODcgNy43OTUgMi40NjUgOS45OWExMS44IDExLjggMCAwIDAgMi41MTcgMi40NTNjLjM4Ni4yNzMuNzQ0LjQ4MiAxLjA0OC42MjUuMjguMTMyLjU4MS4yNC44MjkuMjRzLjU0OC0uMTA4LjgyOS0uMjRhNyA3IDAgMCAwIDEuMDQ4LS42MjUgMTEuOCAxMS44IDAgMCAwIDIuNTE3LTIuNDUzYzEuNjc4LTIuMTk1IDMuMDYxLTUuNTEzIDIuNDY1LTkuOTlhMS41NCAxLjU0IDAgMCAwLTEuMDQ0LTEuMjYzIDYzIDYzIDAgMCAwLTIuODg3LS44N0M5Ljg0My4yNjYgOC42OSAwIDggMG0yLjE0NiA1LjE0NmEuNS41IDAgMCAxIC43MDguNzA4bC0zIDNhLjUuNSAwIDAgMS0uNzA4IDBsLTEuNS0xLjVhLjUuNSAwIDEgMSAuNzA4LS43MDhMNy41IDcuNzkzeiIvPgo8L3N2Zz4=)*/
const ShieldFillCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="shield-fill-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"/>
</svg>
      )}
    />
  );

export default ShieldFillCheck;

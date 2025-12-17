import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![shield-lock-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDBjLS42OSAwLTEuODQzLjI2NS0yLjkyOC41Ni0xLjExLjMtMi4yMjkuNjU1LTIuODg3Ljg3YTEuNTQgMS41NCAwIDAgMC0xLjA0NCAxLjI2MmMtLjU5NiA0LjQ3Ny43ODcgNy43OTUgMi40NjUgOS45OWExMS44IDExLjggMCAwIDAgMi41MTcgMi40NTNjLjM4Ni4yNzMuNzQ0LjQ4MiAxLjA0OC42MjUuMjguMTMyLjU4MS4yNC44MjkuMjRzLjU0OC0uMTA4LjgyOS0uMjRhNyA3IDAgMCAwIDEuMDQ4LS42MjUgMTEuOCAxMS44IDAgMCAwIDIuNTE3LTIuNDUzYzEuNjc4LTIuMTk1IDMuMDYxLTUuNTEzIDIuNDY1LTkuOTlhMS41NCAxLjU0IDAgMCAwLTEuMDQ0LTEuMjYzIDYzIDYzIDAgMCAwLTIuODg3LS44N0M5Ljg0My4yNjYgOC42OSAwIDggMG0wIDVhMS41IDEuNSAwIDAgMSAuNSAyLjkxNWwuMzg1IDEuOTlhLjUuNSAwIDAgMS0uNDkxLjU5NWgtLjc4OGEuNS41IDAgMCAxLS40OS0uNTk1bC4zODQtMS45OUExLjUgMS41IDAgMCAxIDggNSIvPgo8L3N2Zz4=)*/
const ShieldLockFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="shield-lock-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5"/>
</svg>
      )}
    />
  );

export default ShieldLockFill;

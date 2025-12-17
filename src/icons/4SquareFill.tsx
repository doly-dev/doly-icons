import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![4-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi4yMjUgOS4yODF2LjA1M0g4Ljg1VjUuMDYzaC0uMDY1Yy0uODY3IDEuMzMtMS43ODcgMi44MDYtMi41NiA0LjIxOCIvPgogIDxwYXRoIGQ9Ik0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yem01LjUxOSA1LjA1N3EuMzMtLjUyNy42NTctMS4wNTVoMS45MzN2NS4zMzJoMS4wMDh2MS4xMDdIMTAuMTFWMTJIOC44NXYtMS41NTlINC45NzhWOS4zMjJjLjc3LTEuNDI3IDEuNjU2LTIuODQ3IDIuNTQyLTQuMjY1WiIvPgo8L3N2Zz4=)*/
const Icon4SquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="4-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm5.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265Z"/>
</svg>
      )}
    />
  );

export default Icon4SquareFill;

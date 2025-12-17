import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![shield-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4wNzIuNTZDNi4xNTcuMjY1IDcuMzEgMCA4IDBzMS44NDMuMjY1IDIuOTI4LjU2YzEuMTEuMyAyLjIyOS42NTUgMi44ODcuODdhMS41NCAxLjU0IDAgMCAxIDEuMDQ0IDEuMjYyYy41OTYgNC40NzctLjc4NyA3Ljc5NS0yLjQ2NSA5Ljk5YTExLjggMTEuOCAwIDAgMS0yLjUxNyAyLjQ1MyA3IDcgMCAwIDEtMS4wNDguNjI1Yy0uMjguMTMyLS41ODEuMjQtLjgyOS4yNHMtLjU0OC0uMTA4LS44MjktLjI0YTcgNyAwIDAgMS0xLjA0OC0uNjI1IDExLjggMTEuOCAwIDAgMS0yLjUxNy0yLjQ1M0MxLjkyOCAxMC40ODcuNTQ1IDcuMTY5IDEuMTQxIDIuNjkyQTEuNTQgMS41NCAwIDAgMSAyLjE4NSAxLjQzIDYzIDYzIDAgMCAxIDUuMDcyLjU2Ii8+Cjwvc3ZnPg==)*/
const ShieldFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="shield-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
</svg>
      )}
    />
  );

export default ShieldFill;

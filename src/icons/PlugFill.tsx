import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![plug-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAwYS41LjUgMCAwIDEgLjUuNVYzaDNWLjVhLjUuNSAwIDAgMSAxIDBWM2gxYS41LjUgMCAwIDEgLjUuNXYzQTMuNSAzLjUgMCAwIDEgOC41IDEwYy0uMDAyLjQzNC0uMDEuODQ1LS4wNCAxLjIyLS4wNDEuNTE0LS4xMjYgMS4wMDMtLjMxNyAxLjQyNGEyLjA4IDIuMDggMCAwIDEtLjk3IDEuMDI4QzYuNzI1IDEzLjkgNi4xNjkgMTQgNS41IDE0Yy0uOTk4IDAtMS42MS4zMy0xLjk3NC43MThBMS45MiAxLjkyIDAgMCAwIDMgMTZIMmMwLS42MTYuMjMyLTEuMzY3Ljc5Ny0xLjk2OEMzLjM3NCAxMy40MiA0LjI2MSAxMyA1LjUgMTNjLjU4MSAwIC45NjItLjA4OCAxLjIxOC0uMjE5LjI0MS0uMTIzLjQtLjMuNTE0LS41NS4xMjEtLjI2Ni4xOTMtLjYyMS4yMy0xLjA5LjAyNy0uMzQuMDM1LS43MTguMDM3LTEuMTQxQTMuNSAzLjUgMCAwIDEgNCA2LjV2LTNhLjUuNSAwIDAgMSAuNS0uNWgxVi41QS41LjUgMCAwIDEgNiAwIi8+Cjwvc3ZnPg==)*/
const PlugFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="plug-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.08 2.08 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.92 1.92 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0"/>
</svg>
      )}
    />
  );

export default PlugFill;

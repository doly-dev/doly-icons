import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![subscript](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMy4yNjYgMTIuNDk2Ljk2LTIuODUzSDcuNzZsLjk2IDIuODUzSDEwTDYuNjIgM0g1LjM4TDIgMTIuNDk2em0yLjc0OC04LjA2MyAxLjQxOSA0LjIzaC0yLjg4bDEuNDI2LTQuMjN6bTYuMTMyIDcuMjAzdi0uMDc1YzAtLjMzMi4yMzQtLjYxOC42MTktLjYxOC4zNTQgMCAuNjE4LjI1Ni42MTguNTggMCAuMzYyLS4yNzEuNjQ5LS41Mi44OThsLTEuNzg4IDEuODMyVjE1aDMuNTl2LS45NThoLTEuOTIzdi0uMDQ1bC45NzMtMS4wNGMuNDE1LS40MzguODY3LS44NDUuODY3LTEuNTQ3IDAtLjgtLjcwMS0xLjQxLTEuNzg3LTEuNDEtMS4yMyAwLTEuNzk1LjgtMS43OTUgMS41NzZ2LjA2eiIvPgo8L3N2Zz4=)*/
const Subscript: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="subscript"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m3.266 12.496.96-2.853H7.76l.96 2.853H10L6.62 3H5.38L2 12.496zm2.748-8.063 1.419 4.23h-2.88l1.426-4.23zm6.132 7.203v-.075c0-.332.234-.618.619-.618.354 0 .618.256.618.58 0 .362-.271.649-.52.898l-1.788 1.832V15h3.59v-.958h-1.923v-.045l.973-1.04c.415-.438.867-.845.867-1.547 0-.8-.701-1.41-1.787-1.41-1.23 0-1.795.8-1.795 1.576v.06z"/>
</svg>
      )}
    />
  );

export default Subscript;

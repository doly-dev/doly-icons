import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![superscript](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtNC4yNjYgMTIuNDk2Ljk2LTIuODUzSDguNzZsLjk2IDIuODUzSDExTDcuNjIgM0g2LjM4TDMgMTIuNDk2em0yLjc0OC04LjA2MyAxLjQxOSA0LjIzaC0yLjg4bDEuNDI2LTQuMjN6bTUuMTMyLTEuNzk3di0uMDc1YzAtLjMzMi4yMzQtLjYxOC42MTktLjYxOC4zNTQgMCAuNjE4LjI1Ni42MTguNTggMCAuMzYyLS4yNzEuNjQ5LS41Mi44OThsLTEuNzg4IDEuODMyVjZoMy41OXYtLjk1OGgtMS45MjN2LS4wNDVsLjk3My0xLjA0Yy40MTUtLjQzOC44NjctLjg0NS44NjctMS41NDcgMC0uOC0uNzAxLTEuNDEtMS43ODctMS40MUMxMS41NjUgMSAxMSAxLjggMTEgMi41NzZ2LjA2eiIvPgo8L3N2Zz4=)*/
const Superscript: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="superscript"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m4.266 12.496.96-2.853H8.76l.96 2.853H11L7.62 3H6.38L3 12.496zm2.748-8.063 1.419 4.23h-2.88l1.426-4.23zm5.132-1.797v-.075c0-.332.234-.618.619-.618.354 0 .618.256.618.58 0 .362-.271.649-.52.898l-1.788 1.832V6h3.59v-.958h-1.923v-.045l.973-1.04c.415-.438.867-.845.867-1.547 0-.8-.701-1.41-1.787-1.41C11.565 1 11 1.8 11 2.576v.06z"/>
</svg>
      )}
    />
  );

export default Superscript;

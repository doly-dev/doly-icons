import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![c-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptNi4xNDYgNC45OTJjLTEuMjEyIDAtMS45MjcuOTItMS45MjcgMi41MDJ2MS4wNmMwIDEuNTcxLjcwMyAyLjQ2MiAxLjkyNyAyLjQ2Mi45NzkgMCAxLjY0MS0uNTg2IDEuNzI5LTEuNDE4aDEuMjk1di4wOTNjLS4xIDEuNDQ4LTEuMzU0IDIuNDY3LTMuMDMgMi40NjctMi4wOTEgMC0zLjI2OS0xLjMzNi0zLjI2OS0zLjYwM1Y3LjQ4MmMwLTIuMjYxIDEuMjAxLTMuNjM4IDMuMjctMy42MzggMS42ODEgMCAyLjkzNSAxLjA1NCAzLjAyOSAyLjU3MnYuMDg4SDkuODc1Yy0uMDg4LS44NzktLjc2OC0xLjUxMi0xLjcyOS0xLjUxMiIvPgo8L3N2Zz4=)*/
const CSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="c-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512"/>
</svg>
      )}
    />
  );

export default CSquareFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![border-outer](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41IDEuOTA2di45MzhoMXYtLjkzOHptMCAxLjg3NXYuOTM4aDFWMy43OGgtMXptMCAxLjg3NXYuOTM4aDF2LS45Mzh6TTEuOTA2IDguNWguOTM4di0xaC0uOTM4em0xLjg3NSAwaC45Mzh2LTFIMy43OHYxem0xLjg3NSAwaC45Mzh2LTFoLS45Mzh6bTIuODEzIDB2LS4wMzFIOC41VjcuNTNoLS4wMzFWNy41SDcuNTN2LjAzMUg3LjV2LjkzOGguMDMxVjguNXptLjkzNyAwaC45Mzh2LTFoLS45Mzh6bTEuODc1IDBoLjkzOHYtMWgtLjkzOHptMS44NzUgMGguOTM4di0xaC0uOTM4ek03LjUgOS40MDZ2LjkzOGgxdi0uOTM4em0wIDEuODc1di45MzhoMXYtLjkzOHptMCAxLjg3NXYuOTM4aDF2LS45Mzh6Ii8+CiAgPHBhdGggZD0iTTAgMHYxNmgxNlYwem0xIDFoMTR2MTRIMXoiLz4KPC9zdmc+)*/
const BorderOuter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="border-outer"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.5 1.906v.938h1v-.938zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938zM1.906 8.5h.938v-1h-.938zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5zm.937 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zM7.5 9.406v.938h1v-.938zm0 1.875v.938h1v-.938zm0 1.875v.938h1v-.938z"/>
  <path d="M0 0v16h16V0zm1 1h14v14H1z"/>
</svg>
      )}
    />
  );

export default BorderOuter;

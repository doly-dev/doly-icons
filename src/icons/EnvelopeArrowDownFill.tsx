import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![envelope-arrow-down-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjA1IDMuNTU1QTIgMiAwIDAgMSAyIDJoMTJhMiAyIDAgMCAxIDEuOTUgMS41NTVMOCA4LjQxNHpNMCA0LjY5N3Y3LjEwNGw1LjgwMy0zLjU1OHptLjE5MiA4LjE1OSA2LjU3LTQuMDI3TDggOS41ODZsMS4yMzktLjc1Ny4zNjcuMjI1QTQuNDkgNC40OSAwIDAgMCA4IDEyLjVjMCAuNTI2LjA5IDEuMDMuMjU2IDEuNUgyYTIgMiAwIDAgMS0xLjgwOC0xLjE0NE0xNiA0LjY5N3Y0Ljk3NEE0LjUgNC41IDAgMCAwIDEyLjUgOGE0LjUgNC41IDAgMCAwLTEuOTY1LjQ1bC0uMzM4LS4yMDd6Ii8+CiAgPHBhdGggZD0iTTEyLjUgMTZhMy41IDMuNSAwIDEgMCAwLTcgMy41IDMuNSAwIDAgMCAwIDdtLjM1NC0xLjY0NmEuNS41IDAgMCAxLS43MjItLjAxNmwtMS4xNDktMS4yNWEuNS41IDAgMSAxIC43MzctLjY3NmwuMjguMzA1VjExYS41LjUgMCAwIDEgMSAwdjEuNzkzbC4zOTYtLjM5N2EuNS41IDAgMCAxIC43MDguNzA4eiIvPgo8L3N2Zz4=)*/
const EnvelopeArrowDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="envelope-arrow-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zm.192 8.159 6.57-4.027L8 9.586l1.239-.757.367.225A4.49 4.49 0 0 0 8 12.5c0 .526.09 1.03.256 1.5H2a2 2 0 0 1-1.808-1.144M16 4.697v4.974A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-1.965.45l-.338-.207z"/>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.354-1.646a.5.5 0 0 1-.722-.016l-1.149-1.25a.5.5 0 1 1 .737-.676l.28.305V11a.5.5 0 0 1 1 0v1.793l.396-.397a.5.5 0 0 1 .708.708z"/>
</svg>
      )}
    />
  );

export default EnvelopeArrowDownFill;

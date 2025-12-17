import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![2-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi42NDYgNi4yNHYuMDdINS4zNzV2LS4wNjRjMC0xLjIxMy44NzktMi40MDIgMi42MzctMi40MDIgMS41ODIgMCAyLjYxMy45NDkgMi42MTMgMi4yMTUgMCAxLjAwMi0uNiAxLjY2Ny0xLjI4NyAyLjQzbC0uMDk2LjEwNy0xLjk3NCAyLjIydi4wNzdoMy40OThWMTJINS40MjJ2LS44MzJsMi45Ny0zLjI5M2MuNDM0LS40NzUuOTAzLTEuMDA4LjkwMy0xLjcwNSAwLS43NDQtLjU1Ny0xLjIzNi0xLjMxMy0xLjIzNi0uODQzIDAtMS4zMzYuNjE1LTEuMzM2IDEuMzA2Ii8+CiAgPHBhdGggZD0iTTAgMmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTE1IDBhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xeiIvPgo8L3N2Zz4=)*/
const Icon2Square: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="2-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default Icon2Square;

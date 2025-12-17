import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![type-h5](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSAxMC41MTZoMS4yNjRjLjE5My45NzYgMS4xMTIgMS4zNjQgMi4wMSAxLjM2NCAxLjAwNSAwIDIuMDY3LS43ODIgMi4wNjctMi4yNDcgMC0xLjI5Mi0uOTgzLTIuMDgyLTIuMDg5LTIuMDgyLTEuMDEyIDAtMS42NTguNTk2LTEuOTI0IDEuMDc3aC0xLjEyTDkuNjQ2IDNoNS41MzV2MS4xNDFoLTQuNDE1TDEwLjUgNy4yOGguMDcyYy4yMDEtLjMxNi44ODMtLjg0IDEuOTY3LS44NCAxLjcwOSAwIDMuMTMgMS4xNzcgMy4xMyAzLjE1OCAwIDIuMDI1LTEuNDA3IDMuNDAzLTMuNDc1IDMuNDAzLTEuODA5IDAtMy4xLTEuMDQ4LTMuMTk0LTIuNDg0Wk03LjQ5NSAxM1YzLjIwMUg2LjE3NHY0LjE1SDEuMzJWMy4ySDBWMTNoMS4zMlY4LjUxMmg0Ljg1NFYxM3oiLz4KPC9zdmc+)*/
const TypeH5: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="type-h5"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 10.516h1.264c.193.976 1.112 1.364 2.01 1.364 1.005 0 2.067-.782 2.067-2.247 0-1.292-.983-2.082-2.089-2.082-1.012 0-1.658.596-1.924 1.077h-1.12L9.646 3h5.535v1.141h-4.415L10.5 7.28h.072c.201-.316.883-.84 1.967-.84 1.709 0 3.13 1.177 3.13 3.158 0 2.025-1.407 3.403-3.475 3.403-1.809 0-3.1-1.048-3.194-2.484ZM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.512h4.854V13z"/>
</svg>
      )}
    />
  );

export default TypeH5;

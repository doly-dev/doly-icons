import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![9-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDhtMTUgMEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwbS04LjIyMyA0LjE0NmMtMS41OTMgMC0yLjQyNS0uODktMi41Mi0xLjc5OGgxLjI5NmMuMS4zNTcuNTM5LjcyIDEuMjQ4LjcyIDEuMzYgMCAxLjg4LTEuMzUzIDEuODM0LTMuMDIzaC0uMDc2Yy0uMjM1LjYyNy0uODczIDEuMTg0LTEuOTM0IDEuMTg0LTEuMzk1IDAtMi41NjYtLjk2MS0yLjU2Ni0yLjY2NiAwLTEuNzExIDEuMjQyLTIuNzMxIDIuODctMi43MzEgMS41MTIgMCAyLjk3MS44NjcgMi45NzEgNC4wMTQgMCAyLjgzNi0xLjAyIDQuMy0zLjEyMyA0LjNtLjExOC0zLjk3MmMuODA4IDAgMS41MzUtLjUyOCAxLjUzNS0xLjU5NHMtLjY2OC0xLjY3Ni0xLjU2LTEuNjc2Yy0uODM4IDAtMS41MTcuNjE2LTEuNTE3IDEuNjU5IDAgMS4wNzIuNzA4IDEuNjEgMS41NCAxLjYxWiIvPgo8L3N2Zz4=)*/
const Icon9Circle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="9-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-8.223 4.146c-1.593 0-2.425-.89-2.52-1.798h1.296c.1.357.539.72 1.248.72 1.36 0 1.88-1.353 1.834-3.023h-.076c-.235.627-.873 1.184-1.934 1.184-1.395 0-2.566-.961-2.566-2.666 0-1.711 1.242-2.731 2.87-2.731 1.512 0 2.971.867 2.971 4.014 0 2.836-1.02 4.3-3.123 4.3m.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z"/>
</svg>
      )}
    />
  );

export default Icon9Circle;

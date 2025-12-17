import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![r-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTUuNSA0LjAwMlYxMmgxLjMzNVY4LjkyNEg4LjUyTDkuOTggMTJoMS41Mkw5Ljg1NiA4LjcwMWMuODI4LS4yOTkgMS40OTUtMS4xMDEgMS40OTUtMi4yMzggMC0xLjQ4OC0xLjAzLTIuNDYxLTIuNzQtMi40NjF6bTEuMzM1IDEuMDl2Mi43NzdoMS41NDljLjk5NSAwIDEuNTczLS40NjMgMS41NzMtMS4zNiAwLS45MTMtLjU5Ni0xLjQxNy0xLjUzNy0xLjQxN3oiLz4KPC9zdmc+)*/
const RCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="r-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002V12h1.335V8.924H8.52L9.98 12h1.52L9.856 8.701c.828-.299 1.495-1.101 1.495-2.238 0-1.488-1.03-2.461-2.74-2.461zm1.335 1.09v2.777h1.549c.995 0 1.573-.463 1.573-1.36 0-.913-.596-1.417-1.537-1.417z"/>
</svg>
      )}
    />
  );

export default RCircleFill;

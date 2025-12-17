import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![vimeo](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuOTkyIDQuMjA0cS0uMTA2IDIuMzM0LTMuMjYyIDYuMzkzLTMuMjYzIDQuMjQzLTUuNTIyIDQuMjQzLTEuNCAwLTIuMzY3LTIuNTgzTDMuNTUgNy41MjNRMi44MyA0LjkzOSAyLjAwNyA0Ljk0cS0uMTc4LjAwMS0xLjI1NC43NTRMMCA0LjcyNGEyMTAgMjEwIDAgMCAwIDIuMzM0LTIuMDgxcTEuNTgxLTEuMzY0IDIuMzczLTEuNDM3IDEuODY1LS4xODUgMi4yOTggMi41NTMuNDY2IDIuOTUyLjY0NiAzLjY2Ni41NCAyLjQ0NyAxLjE4NiAyLjQ0NS41IDAgMS41MDgtMS41ODcgMS4wMDYtMS41ODcgMS4wNzctMi40MTUuMTQ0LTEuMzctMS4wNzctMS4zN2EzIDMgMCAwIDAtMS4xODUuMjYxcTEuMTgzLTMuODYgNC41MDgtMy43NTYgMi40NjYuMDc1IDIuMzI0IDMuMnoiLz4KPC9zdmc+)*/
const Vimeo: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="vimeo"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.992 4.204q-.106 2.334-3.262 6.393-3.263 4.243-5.522 4.243-1.4 0-2.367-2.583L3.55 7.523Q2.83 4.939 2.007 4.94q-.178.001-1.254.754L0 4.724a210 210 0 0 0 2.334-2.081q1.581-1.364 2.373-1.437 1.865-.185 2.298 2.553.466 2.952.646 3.666.54 2.447 1.186 2.445.5 0 1.508-1.587 1.006-1.587 1.077-2.415.144-1.37-1.077-1.37a3 3 0 0 0-1.185.261q1.183-3.86 4.508-3.756 2.466.075 2.324 3.2z"/>
</svg>
      )}
    />
  );

export default Vimeo;

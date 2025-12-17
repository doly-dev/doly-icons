import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![4-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41MTkgNS4wNTdxLjMzLS41MjcuNjU3LTEuMDU1aDEuOTMzdjUuMzMyaDEuMDA4djEuMTA3SDEwLjExVjEySDguODV2LTEuNTU5SDQuOTc4VjkuMzIyYy43Ny0xLjQyNyAxLjY1Ni0yLjg0NyAyLjU0Mi00LjI2NVpNNi4yMjUgOS4yODF2LjA1M0g4Ljg1VjUuMDYzaC0uMDY1Yy0uODY3IDEuMzMtMS43ODcgMi44MDYtMi41NiA0LjIxOCIvPgogIDxwYXRoIGQ9Ik0wIDJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yem0xNSAwYTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMXoiLz4KPC9zdmc+)*/
const Icon4Square: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="4-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default Icon4Square;

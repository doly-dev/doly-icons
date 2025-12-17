import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![4-circle](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy41MTkgNS4wNTdxLjMzLS41MjcuNjU3LTEuMDU1aDEuOTMzdjUuMzMyaDEuMDA4djEuMTA3SDEwLjExVjEySDguODV2LTEuNTU5SDQuOTc4VjkuMzIyYy43Ny0xLjQyNyAxLjY1Ni0yLjg0NyAyLjU0Mi00LjI2NVpNNi4yMjUgOS4yODF2LjA1M0g4Ljg1VjUuMDYzaC0uMDY1Yy0uODY3IDEuMzMtMS43ODcgMi44MDYtMi41NiA0LjIxOCIvPgogIDxwYXRoIGQ9Ik0xNiA4QTggOCAwIDEgMSAwIDhhOCA4IDAgMCAxIDE2IDBNMSA4YTcgNyAwIDEgMCAxNCAwQTcgNyAwIDAgMCAxIDgiLz4KPC9zdmc+)*/
const Icon4Circle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="4-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"/>
</svg>
      )}
    />
  );

export default Icon4Circle;

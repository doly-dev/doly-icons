import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![4-circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTcuNTE5IDUuMDU3Yy0uODg2IDEuNDE4LTEuNzcyIDIuODM4LTIuNTQyIDQuMjY1djEuMTJIOC44NVYxMmgxLjI2di0xLjU1OWgxLjAwN1Y5LjMzNEgxMC4xMVY0LjAwMkg4LjE3NnpNNi4yMjUgOS4yODF2LjA1M0g4Ljg1VjUuMDYzaC0uMDY1Yy0uODY3IDEuMzMtMS43ODcgMi44MDYtMi41NiA0LjIxOCIvPgo8L3N2Zz4=)*/
const Icon4CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="4-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7.519 5.057c-.886 1.418-1.772 2.838-2.542 4.265v1.12H8.85V12h1.26v-1.559h1.007V9.334H10.11V4.002H8.176zM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>
</svg>
      )}
    />
  );

export default Icon4CircleFill;

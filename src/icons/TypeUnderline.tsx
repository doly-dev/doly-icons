import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![type-underline](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS4zMTMgMy4xMzZoLTEuMjNWOS41NGMwIDIuMTA1IDEuNDcgMy42MjMgMy45MTcgMy42MjNzMy45MTctMS41MTggMy45MTctMy42MjNWMy4xMzZoLTEuMjN2Ni4zMjNjMCAxLjQ5LS45NzggMi41Ny0yLjY4NyAyLjU3cy0yLjY4Ny0xLjA4LTIuNjg3LTIuNTd6TTEyLjUgMTVoLTl2LTFoOXoiLz4KPC9zdmc+)*/
const TypeUnderline: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="type-underline"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57s-2.687-1.08-2.687-2.57zM12.5 15h-9v-1h9z"/>
</svg>
      )}
    />
  );

export default TypeUnderline;

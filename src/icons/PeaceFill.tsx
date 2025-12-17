import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![peace-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQgMTMuMjkyQTggOCAwIDAgMCA4LjUuMDE1djcuNzc4em0tLjcwOC43MDhMOC41IDkuMjA2djYuNzc4YTcuOTcgNy45NyAwIDAgMCA0Ljc5Mi0xLjk4NnpNNy41IDE1Ljk4NVY5LjIwN0wyLjcwOCAxNEE3Ljk3IDcuOTcgMCAwIDAgNy41IDE1Ljk4NU0yIDEzLjI5MkE4IDggMCAwIDEgNy41LjAxNXY3Ljc3OHoiLz4KPC9zdmc+)*/
const PeaceFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="peace-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 13.292A8 8 0 0 0 8.5.015v7.778zm-.708.708L8.5 9.206v6.778a7.97 7.97 0 0 0 4.792-1.986zM7.5 15.985V9.207L2.708 14A7.97 7.97 0 0 0 7.5 15.985M2 13.292A8 8 0 0 1 7.5.015v7.778z"/>
</svg>
      )}
    />
  );

export default PeaceFill;

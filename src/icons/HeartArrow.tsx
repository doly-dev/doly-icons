import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![heart-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi43MDcgOWg0LjM2NGMtLjUzNiAxLjU3MyAyLjAyOCAzLjgwNiA0LjkyOS0uNS0yLjktNC4zMDYtNS40NjUtMi4wNzMtNC45MjktLjVINi43MDdMNC44NTQgNi4xNDZhLjUuNSAwIDEgMC0uNzA4LjcwOEw1LjI5MyA4aC0uNTg2TDIuODU0IDYuMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhMMy4yOTMgOGgtLjU4NkwuODU0IDYuMTQ2YS41LjUgMCAxIDAtLjcwOC43MDhMMS43OTMgOC41LjE0NiAxMC4xNDZhLjUuNSAwIDAgMCAuNzA4LjcwOEwyLjcwNyA5aC41ODZsLTEuMTQ3IDEuMTQ2YS41LjUgMCAwIDAgLjcwOC43MDhMNC43MDcgOWguNTg2bC0xLjE0NyAxLjE0NmEuNS41IDAgMCAwIC43MDguNzA4eiIvPgo8L3N2Zz4=)*/
const HeartArrow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heart-arrow"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.707 9h4.364c-.536 1.573 2.028 3.806 4.929-.5-2.9-4.306-5.465-2.073-4.929-.5H6.707L4.854 6.146a.5.5 0 1 0-.708.708L5.293 8h-.586L2.854 6.146a.5.5 0 1 0-.708.708L3.293 8h-.586L.854 6.146a.5.5 0 1 0-.708.708L1.793 8.5.146 10.146a.5.5 0 0 0 .708.708L2.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708L4.707 9h.586l-1.147 1.146a.5.5 0 0 0 .708.708z"/>
</svg>
      )}
    />
  );

export default HeartArrow;

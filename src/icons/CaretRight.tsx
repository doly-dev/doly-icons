import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![caret-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxMi43OTZWMy4yMDRMMTEuNDgxIDh6bS42NTkuNzUzIDUuNDgtNC43OTZhMSAxIDAgMCAwIDAtMS41MDZMNi42NiAyLjQ1MUM2LjAxMSAxLjg4NSA1IDIuMzQ1IDUgMy4yMDR2OS41OTJhMSAxIDAgMCAwIDEuNjU5Ljc1MyIvPgo8L3N2Zz4=)*/
const CaretRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
</svg>
      )}
    />
  );

export default CaretRight;

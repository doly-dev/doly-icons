import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![eject](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yNyAxLjA0N2ExIDEgMCAwIDEgMS40NiAwbDYuMzQ1IDYuNzdjLjYuNjM4LjE0NiAxLjY4My0uNzMgMS42ODNIMS42NTZDLjc4IDkuNS4zMjYgOC40NTUuOTI2IDcuODE2ek0xNC4zNDYgOC41IDggMS43MzEgMS42NTQgOC41ek0uNSAxMS41YTEgMSAwIDAgMSAxLTFoMTNhMSAxIDAgMCAxIDEgMXYxYTEgMSAwIDAgMS0xIDFoLTEzYTEgMSAwIDAgMS0xLTF6bTE0IDBoLTEzdjFoMTN6Ii8+Cjwvc3ZnPg==)*/
const Eject: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="eject"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.27 1.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H1.656C.78 9.5.326 8.455.926 7.816zM14.346 8.5 8 1.731 1.654 8.5zM.5 11.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1zm14 0h-13v1h13z"/>
</svg>
      )}
    />
  );

export default Eject;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![shift-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yNyAyLjA0N2ExIDEgMCAwIDEgMS40NiAwbDYuMzQ1IDYuNzdjLjYuNjM4LjE0NiAxLjY4My0uNzMgMS42ODNIMTEuNXYzYTEgMSAwIDAgMS0xIDFoLTVhMSAxIDAgMCAxLTEtMXYtM0gxLjY1NEMuNzggMTAuNS4zMjYgOS40NTUuOTI0IDguODE2eiIvPgo8L3N2Zz4=)*/
const ShiftFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="shift-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.27 2.047a1 1 0 0 1 1.46 0l6.345 6.77c.6.638.146 1.683-.73 1.683H11.5v3a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-3H1.654C.78 10.5.326 9.455.924 8.816z"/>
</svg>
      )}
    />
  );

export default ShiftFill;

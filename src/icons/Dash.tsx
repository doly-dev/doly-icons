import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![dash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA4YS41LjUgMCAwIDEgLjUtLjVoN2EuNS41IDAgMCAxIDAgMWgtN0EuNS41IDAgMCAxIDQgOCIvPgo8L3N2Zz4=)*/
const Dash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
</svg>
      )}
    />
  );

export default Dash;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4wMyAxLjg4Yy4yNTItMS4wMSAxLjY4OC0xLjAxIDEuOTQgMGwyLjkwNSAxMS42MkgxNGEuNS41IDAgMCAxIDAgMUgyYS41LjUgMCAwIDEgMC0xaDIuMTI1eiIvPgo8L3N2Zz4=)*/
const Cone: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cone"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125z"/>
</svg>
      )}
    />
  );

export default Cone;

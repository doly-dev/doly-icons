import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pentagon-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy42ODUuMjU2YS41LjUgMCAwIDEgLjYzIDBsNy40MjEgNi4wM2EuNS41IDAgMCAxIC4xNjIuNTM4bC0yLjc4OCA4LjgyN2EuNS41IDAgMCAxLS40NzYuMzQ5SDMuMzY2YS41LjUgMCAwIDEtLjQ3Ni0uMzVMLjEwMiA2LjgyNWEuNS41IDAgMCAxIC4xNjItLjUzOGw3LjQyLTYuMDNaIi8+Cjwvc3ZnPg==)*/
const PentagonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pentagon-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.685.256a.5.5 0 0 1 .63 0l7.421 6.03a.5.5 0 0 1 .162.538l-2.788 8.827a.5.5 0 0 1-.476.349H3.366a.5.5 0 0 1-.476-.35L.102 6.825a.5.5 0 0 1 .162-.538l7.42-6.03Z"/>
</svg>
      )}
    />
  );

export default PentagonFill;

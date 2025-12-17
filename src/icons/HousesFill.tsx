import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![houses-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy4yMDcgMWExIDEgMCAwIDAtMS40MTQgMEwuMTQ2IDYuNjQ2YS41LjUgMCAwIDAgLjcwOC43MDhMMSA3LjIwN1YxMi41QTEuNSAxLjUgMCAwIDAgMi41IDE0aC41NWEyLjUgMi41IDAgMCAxLS4wNS0uNVY5LjQxNWExLjUgMS41IDAgMCAxLS41Ni0yLjQ3NWw1LjM1My01LjM1NHoiLz4KICA8cGF0aCBkPSJNOC43OTMgMmExIDEgMCAwIDEgMS40MTQgMEwxMiAzLjc5M1YyLjVhLjUuNSAwIDAgMSAuNS0uNWgxYS41LjUgMCAwIDEgLjUuNXYzLjI5M2wxLjg1NCAxLjg1M2EuNS41IDAgMCAxLS43MDguNzA4TDE1IDguMjA3VjEzLjVhMS41IDEuNSAwIDAgMS0xLjUgMS41aC04QTEuNSAxLjUgMCAwIDEgNCAxMy41VjguMjA3bC0uMTQ2LjE0N2EuNS41IDAgMSAxLS43MDgtLjcwOHoiLz4KPC9zdmc+)*/
const HousesFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="houses-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.207 1a1 1 0 0 0-1.414 0L.146 6.646a.5.5 0 0 0 .708.708L1 7.207V12.5A1.5 1.5 0 0 0 2.5 14h.55a2.5 2.5 0 0 1-.05-.5V9.415a1.5 1.5 0 0 1-.56-2.475l5.353-5.354z"/>
  <path d="M8.793 2a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708z"/>
</svg>
      )}
    />
  );

export default HousesFill;

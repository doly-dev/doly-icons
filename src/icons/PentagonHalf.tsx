import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pentagon-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtOCAxLjI4OCA2LjU3OCA1LjM0NWEuNS41IDAgMCAxIC4xNjEuNTM5bC0yLjM2MiA3LjQ3OWEuNS41IDAgMCAxLS40NzYuMzQ5SDh6bTcuODk4IDUuNTM2YS41LjUgMCAwIDAtLjE2Mi0uNTM4TDguMzE2LjI1NmEuNS41IDAgMCAwLS42MzEgMEwuMjY0IDYuMjg2YS41LjUgMCAwIDAtLjE2Mi41MzhsMi43ODggOC44MjdhLjUuNSAwIDAgMCAuNDc2LjM0OWg5LjI2OGEuNS41IDAgMCAwIC40NzYtLjM1eiIvPgo8L3N2Zz4=)*/
const PentagonHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pentagon-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m8 1.288 6.578 5.345a.5.5 0 0 1 .161.539l-2.362 7.479a.5.5 0 0 1-.476.349H8zm7.898 5.536a.5.5 0 0 0-.162-.538L8.316.256a.5.5 0 0 0-.631 0L.264 6.286a.5.5 0 0 0-.162.538l2.788 8.827a.5.5 0 0 0 .476.349h9.268a.5.5 0 0 0 .476-.35z"/>
</svg>
      )}
    />
  );

export default PentagonHalf;

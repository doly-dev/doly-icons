import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![menu-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy42NDYuMTQ2YS41LjUgMCAwIDEgLjcwOCAwTDEwLjIwNyAySDE0YTIgMiAwIDAgMSAyIDJ2OWEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlY0YTIgMiAwIDAgMSAyLTJoMy43OTN6TTEgN3YzaDE0Vjd6bTE0LTFWNGExIDEgMCAwIDAtMS0xaC0zLjc5M2ExIDEgMCAwIDEtLjcwNy0uMjkzTDggMS4yMDdsLTEuNSAxLjVBMSAxIDAgMCAxIDUuNzkzIDNIMmExIDEgMCAwIDAtMSAxdjJ6bTAgNUgxdjJhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xek0yIDQuNWEuNS41IDAgMCAxIC41LS41aDhhLjUuNSAwIDAgMSAwIDFoLThhLjUuNSAwIDAgMS0uNS0uNW0wIDRhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIDAgMWgtMTFhLjUuNSAwIDAgMS0uNS0uNW0wIDRhLjUuNSAwIDAgMSAuNS0uNWg2YS41LjUgMCAwIDEgMCAxaC02YS41LjUgMCAwIDEtLjUtLjUiLz4KPC9zdmc+)*/
const MenuDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="menu-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793zM1 7v3h14V7zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default MenuDown;

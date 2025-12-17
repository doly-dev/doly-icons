import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![plus-lg](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDJhLjUuNSAwIDAgMSAuNS41djVoNWEuNS41IDAgMCAxIDAgMWgtNXY1YS41LjUgMCAwIDEtMSAwdi01aC01YS41LjUgMCAwIDEgMC0xaDV2LTVBLjUuNSAwIDAgMSA4IDIiLz4KPC9zdmc+)*/
const PlusLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="plus-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
</svg>
      )}
    />
  );

export default PlusLg;

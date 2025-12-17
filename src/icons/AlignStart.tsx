import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![align-start](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjUgMWEuNS41IDAgMCAxIC41LjV2MTNhLjUuNSAwIDAgMS0xIDB2LTEzYS41LjUgMCAwIDEgLjUtLjUiLz4KICA8cGF0aCBkPSJNMyA3YTEgMSAwIDAgMSAxLTFoMTBhMSAxIDAgMCAxIDEgMXYyYTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xeiIvPgo8L3N2Zz4=)*/
const AlignStart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="align-start"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"/>
  <path d="M3 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default AlignStart;

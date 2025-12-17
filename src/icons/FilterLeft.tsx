import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filter-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxMC41YS41LjUgMCAwIDEgLjUtLjVoM2EuNS41IDAgMCAxIDAgMWgtM2EuNS41IDAgMCAxLS41LS41bTAtM2EuNS41IDAgMCAxIC41LS41aDdhLjUuNSAwIDAgMSAwIDFoLTdhLjUuNSAwIDAgMS0uNS0uNW0wLTNhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIDAgMWgtMTFhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const FilterLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filter-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default FilterLeft;

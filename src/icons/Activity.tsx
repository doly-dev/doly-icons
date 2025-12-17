import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![activity](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDJhLjUuNSAwIDAgMSAuNDcuMzNMMTAgMTIuMDM2bDEuNTMtNC4yMDhBLjUuNSAwIDAgMSAxMiA3LjVoMy41YS41LjUgMCAwIDEgMCAxaC0zLjE1bC0xLjg4IDUuMTdhLjUuNSAwIDAgMS0uOTQgMEw2IDMuOTY0IDQuNDcgOC4xNzFBLjUuNSAwIDAgMSA0IDguNUguNWEuNS41IDAgMCAxIDAtMWgzLjE1bDEuODgtNS4xN0EuNS41IDAgMCAxIDYgMiIvPgo8L3N2Zz4=)*/
const Activity: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="activity"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
</svg>
      )}
    />
  );

export default Activity;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![gender-neuter](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDFhNCA0IDAgMSAwIDAgOCA0IDQgMCAwIDAgMC04TTMgNWE1IDUgMCAxIDEgNS41IDQuOTc1VjE1LjVhLjUuNSAwIDAgMS0xIDBWOS45NzVBNSA1IDAgMCAxIDMgNSIvPgo8L3N2Zz4=)*/
const GenderNeuter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gender-neuter"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V15.5a.5.5 0 0 1-1 0V9.975A5 5 0 0 1 3 5"/>
</svg>
      )}
    />
  );

export default GenderNeuter;

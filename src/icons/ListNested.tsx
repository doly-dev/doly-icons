import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![list-nested](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00LjUgMTEuNUEuNS41IDAgMCAxIDUgMTFoMTBhLjUuNSAwIDAgMSAwIDFINWEuNS41IDAgMCAxLS41LS41bS0yLTRBLjUuNSAwIDAgMSAzIDdoMTBhLjUuNSAwIDAgMSAwIDFIM2EuNS41IDAgMCAxLS41LS41bS0yLTRBLjUuNSAwIDAgMSAxIDNoMTBhLjUuNSAwIDAgMSAwIDFIMWEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const ListNested: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="list-nested"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default ListNested;

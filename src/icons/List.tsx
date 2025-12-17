import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjUgMTJhLjUuNSAwIDAgMSAuNS0uNWgxMGEuNS41IDAgMCAxIDAgMUgzYS41LjUgMCAwIDEtLjUtLjVtMC00YS41LjUgMCAwIDEgLjUtLjVoMTBhLjUuNSAwIDAgMSAwIDFIM2EuNS41IDAgMCAxLS41LS41bTAtNGEuNS41IDAgMCAxIC41LS41aDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const List: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="list"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default List;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![graph-up](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBoMXYxNWgxNXYxSDB6bTE0LjgxNyAzLjExM2EuNS41IDAgMCAxIC4wNy43MDRsLTQuNSA1LjVhLjUuNSAwIDAgMS0uNzQuMDM3TDcuMDYgNi43NjdsLTMuNjU2IDUuMDI3YS41LjUgMCAwIDEtLjgwOC0uNTg4bDQtNS41YS41LjUgMCAwIDEgLjc1OC0uMDZsMi42MDkgMi42MSA0LjE1LTUuMDczYS41LjUgMCAwIDEgLjcwNC0uMDciLz4KPC9zdmc+)*/
const GraphUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="graph-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
</svg>
      )}
    />
  );

export default GraphUp;

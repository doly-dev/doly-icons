import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![graph-up-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBoMXYxNWgxNXYxSDB6bTEwIDMuNWEuNS41IDAgMCAxIC41LS41aDRhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMS0xIDBWNC45bC0zLjYxMyA0LjQxN2EuNS41IDAgMCAxLS43NC4wMzdMNy4wNiA2Ljc2N2wtMy42NTYgNS4wMjdhLjUuNSAwIDAgMS0uODA4LS41ODhsNC01LjVhLjUuNSAwIDAgMSAuNzU4LS4wNmwyLjYwOSAyLjYxTDEzLjQ0NSA0SDEwLjVhLjUuNSAwIDAgMS0uNS0uNSIvPgo8L3N2Zz4=)*/
const GraphUpArrow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="graph-up-arrow"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default GraphUpArrow;

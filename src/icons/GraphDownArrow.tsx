import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![graph-down-arrow](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIDBoMXYxNWgxNXYxSDB6bTEwIDExLjVhLjUuNSAwIDAgMCAuNS41aDRhLjUuNSAwIDAgMCAuNS0uNXYtNGEuNS41IDAgMCAwLTEgMHYyLjZsLTMuNjEzLTQuNDE3YS41LjUgMCAwIDAtLjc0LS4wMzdMNy4wNiA4LjIzMyAzLjQwNCAzLjIwNmEuNS41IDAgMCAwLS44MDguNTg4bDQgNS41YS41LjUgMCAwIDAgLjc1OC4wNmwyLjYwOS0yLjYxTDEzLjQ0NSAxMUgxMC41YS41LjUgMCAwIDAtLjUuNSIvPgo8L3N2Zz4=)*/
const GraphDownArrow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="graph-down-arrow"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5"/>
</svg>
      )}
    />
  );

export default GraphDownArrow;

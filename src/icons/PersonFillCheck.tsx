import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-fill-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20xLjY3OS00LjQ5My0xLjMzNSAyLjIyNmEuNzUuNzUgMCAwIDEtMS4xNzQuMTQ0bC0uNzc0LS43NzNhLjUuNSAwIDAgMSAuNzA4LS43MDhsLjU0Ny41NDggMS4xNy0xLjk1MWEuNS41IDAgMSAxIC44NTguNTE0TTExIDVhMyAzIDAgMSAxLTYgMCAzIDMgMCAwIDEgNiAwIi8+CiAgPHBhdGggZD0iTTIgMTNjMCAxIDEgMSAxIDFoNS4yNTZBNC41IDQuNSAwIDAgMSA4IDEyLjVhNC41IDQuNSAwIDAgMSAxLjU0NC0zLjM5M1E4Ljg0NCA5LjAwMiA4IDljLTUgMC02IDMtNiA0Ii8+Cjwvc3ZnPg==)*/
const PersonFillCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>
      )}
    />
  );

export default PersonFillCheck;

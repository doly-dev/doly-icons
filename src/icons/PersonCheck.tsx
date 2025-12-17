import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIuNSAxNmEzLjUgMy41IDAgMSAwIDAtNyAzLjUgMy41IDAgMCAwIDAgN20xLjY3OS00LjQ5My0xLjMzNSAyLjIyNmEuNzUuNzUgMCAwIDEtMS4xNzQuMTQ0bC0uNzc0LS43NzNhLjUuNSAwIDAgMSAuNzA4LS43MDhsLjU0Ny41NDggMS4xNy0xLjk1MWEuNS41IDAgMSAxIC44NTguNTE0TTExIDVhMyAzIDAgMSAxLTYgMCAzIDMgMCAwIDEgNiAwTTggN2EyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDQiLz4KICA8cGF0aCBkPSJNOC4yNTYgMTRhNC41IDQuNSAwIDAgMS0uMjI5LTEuMDA0SDNjLjAwMS0uMjQ2LjE1NC0uOTg2LjgzMi0xLjY2NEM0LjQ4NCAxMC42OCA1LjcxMSAxMCA4IDEwcS4zOSAwIC43NC4wMjVjLjIyNi0uMzQxLjQ5Ni0uNjUuODA0LS45MThROC44NDQgOS4wMDIgOCA5Yy01IDAtNiAzLTYgNHMxIDEgMSAxeiIvPgo8L3N2Zz4=)*/
const PersonCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
</svg>
      )}
    />
  );

export default PersonCheck;

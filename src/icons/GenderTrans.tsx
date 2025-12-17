import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![gender-trans](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wIC41QS41LjUgMCAwIDEgLjUgMGgzYS41LjUgMCAwIDEgMCAxSDEuNzA3TDMuNSAyLjc5M2wuNjQ2LS42NDdhLjUuNSAwIDEgMSAuNzA4LjcwOGwtLjY0Ny42NDYuODIyLjgyMkE0IDQgMCAwIDEgOCAzYzEuMTggMCAyLjIzOS41MSAyLjk3MSAxLjMyMkwxNC4yOTMgMUgxMS41YS41LjUgMCAwIDEgMC0xaDRhLjUuNSAwIDAgMSAuNS41djRhLjUuNSAwIDAgMS0xIDBWMS43MDdsLTMuNDUgMy40NUE0IDQgMCAwIDEgOC41IDEwLjk3VjEzSDEwYS41LjUgMCAwIDEgMCAxSDguNXYxLjVhLjUuNSAwIDAgMS0xIDBWMTRINmEuNS41IDAgMCAxIDAtMWgxLjV2LTIuMDNhNCA0IDAgMCAxLTMuMDUtNS44MTRsLS45NS0uOTQ5LS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4bC42NDctLjY0NkwxIDEuNzA3VjMuNWEuNS41IDAgMCAxLTEgMHptNS40OSA0Ljg1NmEzIDMgMCAxIDAgNS4wMiAzLjI4OCAzIDMgMCAwIDAtNS4wMi0zLjI4OCIvPgo8L3N2Zz4=)*/
const GenderTrans: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gender-trans"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h3a.5.5 0 0 1 0 1H1.707L3.5 2.793l.646-.647a.5.5 0 1 1 .708.708l-.647.646.822.822A4 4 0 0 1 8 3c1.18 0 2.239.51 2.971 1.322L14.293 1H11.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-3.45 3.45A4 4 0 0 1 8.5 10.97V13H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V14H6a.5.5 0 0 1 0-1h1.5v-2.03a4 4 0 0 1-3.05-5.814l-.95-.949-.646.647a.5.5 0 1 1-.708-.708l.647-.646L1 1.707V3.5a.5.5 0 0 1-1 0zm5.49 4.856a3 3 0 1 0 5.02 3.288 3 3 0 0 0-5.02-3.288"/>
</svg>
      )}
    />
  );

export default GenderTrans;

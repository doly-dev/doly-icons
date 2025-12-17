import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![basket2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAxMGExIDEgMCAwIDEgMiAwdjJhMSAxIDAgMCAxLTIgMHptMyAwYTEgMSAwIDAgMSAyIDB2MmExIDEgMCAwIDEtMiAwem0zIDBhMSAxIDAgMSAxIDIgMHYyYTEgMSAwIDAgMS0yIDB6Ii8+CiAgPHBhdGggZD0iTTUuNzU3IDEuMDcxYS41LjUgMCAwIDEgLjE3Mi42ODZMMy4zODMgNmg5LjIzNEwxMC4wNyAxLjc1N2EuNS41IDAgMSAxIC44NTgtLjUxNEwxMy43ODMgNkgxNS41YS41LjUgMCAwIDEgLjUuNXYxYS41LjUgMCAwIDEtLjUuNWgtLjYyM2wtMS44NDQgNi40NTZhLjc1Ljc1IDAgMCAxLS43MjIuNTQ0SDMuNjlhLjc1Ljc1IDAgMCAxLS43MjItLjU0NEwxLjEyMyA4SC41YS41LjUgMCAwIDEtLjUtLjV2LTFBLjUuNSAwIDAgMSAuNSA2aDEuNzE3TDUuMDcgMS4yNDNhLjUuNSAwIDAgMSAuNjg2LS4xNzJ6TTIuMTYzIDhsMS43MTQgNmg4LjI0NmwxLjcxNC02eiIvPgo8L3N2Zz4=)*/
const Basket2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="basket2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0z"/>
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6z"/>
</svg>
      )}
    />
  );

export default Basket2;

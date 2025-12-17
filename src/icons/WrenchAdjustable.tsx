import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wrench-adjustable](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgNC41YTQuNSA0LjUgMCAwIDEtMS43MDMgMy41MjZMMTMgNWwyLjk1OS0xLjExcS4wNC4zLjA0MS42MSIvPgogIDxwYXRoIGQ9Ik0xMS41IDljLjY1MyAwIDEuMjczLS4xMzkgMS44MzMtLjM5TDEyIDUuNSAxMSAzbDMuODI2LTEuNTNBNC41IDQuNSAwIDAgMCA3LjI5IDYuMDkybC02LjExNiA1LjA5NmEyLjU4MyAyLjU4MyAwIDEgMCAzLjYzOCAzLjYzOEw5LjkwOCA4LjcxQTQuNSA0LjUgMCAwIDAgMTEuNSA5bS0xLjI5Mi00LjM2MS0uNTk2Ljg5My44MDktLjI3YS4yNS4yNSAwIDAgMSAuMjg3LjM3N2wtLjU5Ni44OTMuODA5LS4yNy4xNTguNDc1LTEuNS41YS4yNS4yNSAwIDAgMS0uMjg3LS4zNzZsLjU5Ni0uODkzLS44MDkuMjdhLjI1LjI1IDAgMCAxLS4yODctLjM3N2wuNTk2LS44OTMtLjgwOS4yNy0uMTU4LS40NzUgMS41LS41YS4yNS4yNSAwIDAgMSAuMjg3LjM3Nk0zIDE0YTEgMSAwIDEgMSAwLTIgMSAxIDAgMCAxIDAgMiIvPgo8L3N2Zz4=)*/
const WrenchAdjustable: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wrench-adjustable"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 4.5a4.5 4.5 0 0 1-1.703 3.526L13 5l2.959-1.11q.04.3.041.61"/>
  <path d="M11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.5 4.5 0 0 0 11.5 9m-1.292-4.361-.596.893.809-.27a.25.25 0 0 1 .287.377l-.596.893.809-.27.158.475-1.5.5a.25.25 0 0 1-.287-.376l.596-.893-.809.27a.25.25 0 0 1-.287-.377l.596-.893-.809.27-.158-.475 1.5-.5a.25.25 0 0 1 .287.376M3 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>
      )}
    />
  );

export default WrenchAdjustable;

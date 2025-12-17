import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![hourglass-split](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDE1YS41LjUgMCAxIDEgMC0xaDF2LTFhNC41IDQuNSAwIDAgMSAyLjU1Ny00LjA2Yy4yOS0uMTM5LjQ0My0uMzc3LjQ0My0uNTl2LS43YzAtLjIxMy0uMTU0LS40NTEtLjQ0My0uNTlBNC41IDQuNSAwIDAgMSAzLjUgM1YyaC0xYS41LjUgMCAwIDEgMC0xaDExYS41LjUgMCAwIDEgMCAxaC0xdjFhNC41IDQuNSAwIDAgMS0yLjU1NyA0LjA2Yy0uMjkuMTM5LS40NDMuMzc3LS40NDMuNTl2LjdjMCAuMjEzLjE1NC40NTEuNDQzLjU5QTQuNSA0LjUgMCAwIDEgMTIuNSAxM3YxaDFhLjUuNSAwIDAgMSAwIDF6bTItMTN2MWMwIC41MzcuMTIgMS4wNDUuMzM3IDEuNWg2LjMyNmMuMjE2LS40NTUuMzM3LS45NjMuMzM3LTEuNVYyem0zIDYuMzVjMCAuNzAxLS40NzggMS4yMzYtMS4wMTEgMS40OTJBMy41IDMuNSAwIDAgMCA0LjUgMTNzLjg2Ni0xLjI5OSAzLTEuNDh6bTEgMHYzLjE3YzIuMTM0LjE4MSAzIDEuNDggMyAxLjQ4YTMuNSAzLjUgMCAwIDAtMS45ODktMy4xNThDOC45NzggOS41ODYgOC41IDkuMDUyIDguNSA4LjM1MXoiLz4KPC9zdmc+)*/
const HourglassSplit: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="hourglass-split"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
</svg>
      )}
    />
  );

export default HourglassSplit;

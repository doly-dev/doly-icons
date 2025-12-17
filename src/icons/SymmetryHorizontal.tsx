import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![symmetry-horizontal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuNSA3YS41LjUgMCAwIDAgLjI0LS45MzlsLTExLTZBLjUuNSAwIDAgMCAyIC41djZhLjUuNSAwIDAgMCAuNS41em0uNDg1IDIuMzc2YS41LjUgMCAwIDEtLjI0Ni41NjNsLTExIDZBLjUuNSAwIDAgMSAyIDE1LjV2LTZhLjUuNSAwIDAgMSAuNS0uNWgxMWEuNS41IDAgMCAxIC40ODUuMzc2TTExLjUzOSAxMEgzdjQuNjU4eiIvPgo8L3N2Zz4=)*/
const SymmetryHorizontal: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="symmetry-horizontal"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376M11.539 10H3v4.658z"/>
</svg>
      )}
    />
  );

export default SymmetryHorizontal;

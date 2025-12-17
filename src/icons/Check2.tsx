import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![check2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuODU0IDMuNjQ2YS41LjUgMCAwIDEgMCAuNzA4bC03IDdhLjUuNSAwIDAgMS0uNzA4IDBsLTMuNS0zLjVhLjUuNSAwIDEgMSAuNzA4LS43MDhMNi41IDEwLjI5M2w2LjY0Ni02LjY0N2EuNS41IDAgMCAxIC43MDggMCIvPgo8L3N2Zz4=)*/
const Check2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="check2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default Check2;

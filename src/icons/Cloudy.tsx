import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloudy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuNDA1IDguNTI3YTUuMDAxIDUuMDAxIDAgMCAwLTkuNDk5LTEuMDA0QTMuNSAzLjUgMCAxIDAgMy41IDE0LjVIMTNhMyAzIDAgMCAwIC40MDUtNS45NzNNOC41IDUuNWE0IDQgMCAwIDEgMy45NzYgMy41NTUuNS41IDAgMCAwIC41LjQ0NUgxM2EyIDIgMCAwIDEtLjAwMSA0SDMuNWEyLjUgMi41IDAgMSAxIC42MDUtNC45MjYuNS41IDAgMCAwIC41OTYtLjMyOUE0IDQgMCAwIDEgOC41IDUuNSIvPgo8L3N2Zz4=)*/
const Cloudy: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloudy"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.405 8.527a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 14.5H13a3 3 0 0 0 .405-5.973M8.5 5.5a4 4 0 0 1 3.976 3.555.5.5 0 0 0 .5.445H13a2 2 0 0 1-.001 4H3.5a2.5 2.5 0 1 1 .605-4.926.5.5 0 0 0 .596-.329A4 4 0 0 1 8.5 5.5"/>
</svg>
      )}
    />
  );

export default Cloudy;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloudy-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMuNDA1IDcuMDI3YTUuMDAxIDUuMDAxIDAgMCAwLTkuNDk5LTEuMDA0QTMuNSAzLjUgMCAxIDAgMy41IDEzSDEzYTMgMyAwIDAgMCAuNDA1LTUuOTczIi8+Cjwvc3ZnPg==)*/
const CloudyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloudy-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13.405 7.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 13H13a3 3 0 0 0 .405-5.973"/>
</svg>
      )}
    />
  );

export default CloudyFill;

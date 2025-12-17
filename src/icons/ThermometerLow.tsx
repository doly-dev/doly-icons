import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![thermometer-low](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41IDEyLjVhMS41IDEuNSAwIDEgMS0yLTEuNDE1VjkuNWEuNS41IDAgMCAxIDEgMHYxLjU4NWExLjUgMS41IDAgMCAxIDEgMS40MTUiLz4KICA8cGF0aCBkPSJNNS41IDIuNWEyLjUgMi41IDAgMCAxIDUgMHY3LjU1YTMuNSAzLjUgMCAxIDEtNSAwek04IDFhMS41IDEuNSAwIDAgMC0xLjUgMS41djcuOTg3bC0uMTY3LjE1YTIuNSAyLjUgMCAxIDAgMy4zMzMgMGwtLjE2Ni0uMTVWMi41QTEuNSAxLjUgMCAwIDAgOCAxIi8+Cjwvc3ZnPg==)*/
const ThermometerLow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="thermometer-low"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V9.5a.5.5 0 0 1 1 0v1.585a1.5 1.5 0 0 1 1 1.415"/>
  <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1"/>
</svg>
      )}
    />
  );

export default ThermometerLow;

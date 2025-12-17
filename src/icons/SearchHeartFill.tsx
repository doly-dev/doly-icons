import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![search-heart-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDEzYTYuNDcgNi40NyAwIDAgMCAzLjg0NS0xLjI1OGgtLjAwMXEuMDQ0LjA2LjA5OC4xMTVsMy44NSAzLjg1YTEgMSAwIDAgMCAxLjQxNS0xLjQxNGwtMy44NS0zLjg1YTEgMSAwIDAgMC0uMTE1LS4xQTYuNDcgNi40NyAwIDAgMCAxMyA2LjUgNi41IDYuNSAwIDAgMCA2LjUgMGE2LjUgNi41IDAgMSAwIDAgMTNtMC04LjUxOGMxLjY2NC0xLjY3MyA1LjgyNSAxLjI1NCAwIDUuMDE4LTUuODI1LTMuNzY0LTEuNjY0LTYuNjkgMC01LjAxOCIvPgo8L3N2Zz4=)*/
const SearchHeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="search-heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 13a6.47 6.47 0 0 0 3.845-1.258h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1A6.47 6.47 0 0 0 13 6.5 6.5 6.5 0 0 0 6.5 0a6.5 6.5 0 1 0 0 13m0-8.518c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
</svg>
      )}
    />
  );

export default SearchHeartFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![search-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDQuNDgyYzEuNjY0LTEuNjczIDUuODI1IDEuMjU0IDAgNS4wMTgtNS44MjUtMy43NjQtMS42NjQtNi42OSAwLTUuMDE4Ii8+CiAgPHBhdGggZD0iTTEzIDYuNWE2LjQ3IDYuNDcgMCAwIDEtMS4yNTggMy44NDRxLjA2LjA0NC4xMTUuMDk4bDMuODUgMy44NWExIDEgMCAwIDEtMS40MTQgMS40MTVsLTMuODUtMy44NWExIDEgMCAwIDEtLjEtLjExNWguMDAyQTYuNSA2LjUgMCAxIDEgMTMgNi41TTYuNSAxMmE1LjUgNS41IDAgMSAwIDAtMTEgNS41IDUuNSAwIDAgMCAwIDExIi8+Cjwvc3ZnPg==)*/
const SearchHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="search-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018"/>
  <path d="M13 6.5a6.47 6.47 0 0 1-1.258 3.844q.06.044.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11"/>
</svg>
      )}
    />
  );

export default SearchHeart;

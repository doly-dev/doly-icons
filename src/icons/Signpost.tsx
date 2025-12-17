import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![signpost](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyAxLjQxNFY0SDJhMSAxIDAgMCAwLTEgMXY0YTEgMSAwIDAgMCAxIDFoNXY2aDJ2LTZoMy41MzJhMSAxIDAgMCAwIC43NjgtLjM2bDEuOTMzLTIuMzJhLjUuNSAwIDAgMCAwLS42NEwxMy4zIDQuMzZhMSAxIDAgMCAwLS43NjgtLjM2SDlWMS40MTRhMSAxIDAgMCAwLTIgME0xMi41MzIgNWwxLjY2NiAyLTEuNjY2IDJIMlY1eiIvPgo8L3N2Zz4=)*/
const Signpost: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="signpost"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 1.414V4H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h5v6h2v-6h3.532a1 1 0 0 0 .768-.36l1.933-2.32a.5.5 0 0 0 0-.64L13.3 4.36a1 1 0 0 0-.768-.36H9V1.414a1 1 0 0 0-2 0M12.532 5l1.666 2-1.666 2H2V5z"/>
</svg>
      )}
    />
  );

export default Signpost;

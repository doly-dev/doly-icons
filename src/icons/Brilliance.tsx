import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![brilliance](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDEgOCAwYTggOCAwIDAgMSAwIDE2TTEgOGE3IDcgMCAwIDAgNyA3IDMuNSAzLjUgMCAxIDAgMC03IDMuNSAzLjUgMCAxIDEgMC03IDcgNyAwIDAgMC03IDciLz4KPC9zdmc+)*/
const Brilliance: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="brilliance"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7"/>
</svg>
      )}
    />
  );

export default Brilliance;

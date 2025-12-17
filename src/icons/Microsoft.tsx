import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![microsoft](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNy40NjIgMEgwdjcuMTloNy40NjJ6TTE2IDBIOC41Mzh2Ny4xOUgxNnpNNy40NjIgOC4yMTFIMFYxNmg3LjQ2MnptOC41MzggMEg4LjUzOFYxNkgxNnoiLz4KPC9zdmc+)*/
const Microsoft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="microsoft"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/>
</svg>
      )}
    />
  );

export default Microsoft;

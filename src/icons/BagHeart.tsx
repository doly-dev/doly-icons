import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bag-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC41IDMuNWEyLjUgMi41IDAgMCAwLTUgMFY0aDV6bTEgMFY0SDE1djEwYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0yVjRoMy41di0uNWEzLjUgMy41IDAgMSAxIDcgME0xNCAxNFY1SDJ2OWExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTFNOCA3Ljk5M2MxLjY2NC0xLjcxMSA1LjgyNSAxLjI4MyAwIDUuMTMyLTUuODI1LTMuODUtMS42NjQtNi44NDMgMC01LjEzMiIvPgo8L3N2Zz4=)*/
const BagHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bag-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"/>
</svg>
      )}
    />
  );

export default BagHeart;

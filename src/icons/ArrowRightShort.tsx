import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrow-right-short](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDhhLjUuNSAwIDAgMSAuNS0uNWg1Ljc5M0w4LjE0NiA1LjM1NGEuNS41IDAgMSAxIC43MDgtLjcwOGwzIDNhLjUuNSAwIDAgMSAwIC43MDhsLTMgM2EuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOC41SDQuNUEuNS41IDAgMCAxIDQgOCIvPgo8L3N2Zz4=)*/
const ArrowRightShort: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-right-short"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg>
      )}
    />
  );

export default ArrowRightShort;

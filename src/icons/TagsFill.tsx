import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tags-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTEgMSAwIDAgMSAxLTFoNC41ODZhMSAxIDAgMCAxIC43MDcuMjkzbDcgN2ExIDEgMCAwIDEgMCAxLjQxNGwtNC41ODYgNC41ODZhMSAxIDAgMCAxLTEuNDE0IDBsLTctN0ExIDEgMCAwIDEgMiA2LjU4NnptMy41IDRhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDMiLz4KICA8cGF0aCBkPSJNMS4yOTMgNy43OTNBMSAxIDAgMCAxIDEgNy4wODZWMmExIDEgMCAwIDAtMSAxdjQuNTg2YTEgMSAwIDAgMCAuMjkzLjcwN2w3IDdhMSAxIDAgMCAwIDEuNDE0IDBsLjA0My0uMDQzeiIvPgo8L3N2Zz4=)*/
const TagsFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tags-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
  <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043z"/>
</svg>
      )}
    />
  );

export default TagsFill;

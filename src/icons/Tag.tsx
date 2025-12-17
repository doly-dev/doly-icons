import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tag](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiA0LjVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBtLTEgMGEuNS41IDAgMSAwLTEgMCAuNS41IDAgMCAwIDEgMCIvPgogIDxwYXRoIGQ9Ik0yIDFoNC41ODZhMSAxIDAgMCAxIC43MDcuMjkzbDcgN2ExIDEgMCAwIDEgMCAxLjQxNGwtNC41ODYgNC41ODZhMSAxIDAgMCAxLTEuNDE0IDBsLTctN0ExIDEgMCAwIDEgMSA2LjU4NlYyYTEgMSAwIDAgMSAxLTFtMCA1LjU4NiA3IDdMMTMuNTg2IDlsLTctN0gyeiIvPgo8L3N2Zz4=)*/
const Tag: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tag"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0"/>
  <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1m0 5.586 7 7L13.586 9l-7-7H2z"/>
</svg>
      )}
    />
  );

export default Tag;

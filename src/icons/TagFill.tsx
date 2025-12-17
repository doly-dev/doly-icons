import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tag-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxYTEgMSAwIDAgMC0xIDF2NC41ODZhMSAxIDAgMCAwIC4yOTMuNzA3bDcgN2ExIDEgMCAwIDAgMS40MTQgMGw0LjU4Ni00LjU4NmExIDEgMCAwIDAgMC0xLjQxNGwtNy03QTEgMSAwIDAgMCA2LjU4NiAxem00IDMuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMCIvPgo8L3N2Zz4=)*/
const TagFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tag-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
      )}
    />
  );

export default TagFill;

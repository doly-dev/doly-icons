import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![collection-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxM2ExLjUgMS41IDAgMCAwIDEuNSAxLjVoMTNBMS41IDEuNSAwIDAgMCAxNiAxM1Y2YTEuNSAxLjUgMCAwIDAtMS41LTEuNWgtMTNBMS41IDEuNSAwIDAgMCAwIDZ6TTIgM2EuNS41IDAgMCAwIC41LjVoMTFhLjUuNSAwIDAgMCAwLTFoLTExQS41LjUgMCAwIDAgMiAzbTItMmEuNS41IDAgMCAwIC41LjVoN2EuNS41IDAgMCAwIDAtMWgtN0EuNS41IDAgMCAwIDQgMSIvPgo8L3N2Zz4=)*/
const CollectionFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="collection-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"/>
</svg>
      )}
    />
  );

export default CollectionFill;

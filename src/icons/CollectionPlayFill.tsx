import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![collection-play-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDMuNWEuNS41IDAgMCAxIDAtMWgxMWEuNS41IDAgMCAxIDAgMXptMi0yYS41LjUgMCAwIDEgMC0xaDdhLjUuNSAwIDAgMSAwIDF6TTAgMTNhMS41IDEuNSAwIDAgMCAxLjUgMS41aDEzQTEuNSAxLjUgMCAwIDAgMTYgMTNWNmExLjUgMS41IDAgMCAwLTEuNS0xLjVoLTEzQTEuNSAxLjUgMCAwIDAgMCA2em02LjI1OC02LjQzN2EuNS41IDAgMCAxIC41MDcuMDEzbDQgMi41YS41LjUgMCAwIDEgMCAuODQ4bC00IDIuNUEuNS41IDAgMCAxIDYgMTJWN2EuNS41IDAgMCAxIC4yNTgtLjQzNyIvPgo8L3N2Zz4=)*/
const CollectionPlayFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="collection-play-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437"/>
</svg>
      )}
    />
  );

export default CollectionPlayFill;

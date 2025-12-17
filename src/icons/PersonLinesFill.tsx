import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-lines-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiA4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNm0tNSA2cy0xIDAtMS0xIDEtNCA2LTQgNiAzIDYgNC0xIDEtMSAxek0xMSAzLjVhLjUuNSAwIDAgMSAuNS0uNWg0YS41LjUgMCAwIDEgMCAxaC00YS41LjUgMCAwIDEtLjUtLjVtLjUgMi41YS41LjUgMCAwIDAgMCAxaDRhLjUuNSAwIDAgMCAwLTF6bTIgM2EuNS41IDAgMCAwIDAgMWgyYS41LjUgMCAwIDAgMC0xem0wIDNhLjUuNSAwIDAgMCAwIDFoMmEuNS41IDAgMCAwIDAtMXoiLz4KPC9zdmc+)*/
const PersonLinesFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-lines-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default PersonLinesFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exposure](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDRhLjUuNSAwIDAgMC0xIDB2MmgtMmEuNS41IDAgMCAwIDAgMWgydjJhLjUuNSAwIDAgMCAxIDBWN2gyYS41LjUgMCAwIDAgMC0xaC0yem0tMyA3YS41LjUgMCAwIDAgMCAxaDVhLjUuNSAwIDAgMCAwLTF6Ii8+CiAgPHBhdGggZD0iTTggMGE4IDggMCAxIDAgMCAxNkE4IDggMCAwIDAgOCAwTTEgOGE3IDcgMCAxIDEgMTQgMEE3IDcgMCAwIDEgMSA4Ii8+Cjwvc3ZnPg==)*/
const Exposure: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exposure"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 4a.5.5 0 0 0-1 0v2h-2a.5.5 0 0 0 0 1h2v2a.5.5 0 0 0 1 0V7h2a.5.5 0 0 0 0-1h-2zm-3 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8"/>
</svg>
      )}
    />
  );

export default Exposure;

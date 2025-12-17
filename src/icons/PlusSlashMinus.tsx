import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![plus-slash-minus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMS44NTQgMTQuODU0IDEzLTEzYS41LjUgMCAwIDAtLjcwOC0uNzA4bC0xMyAxM2EuNS41IDAgMCAwIC43MDguNzA4TTQgMWEuNS41IDAgMCAxIC41LjV2MmgyYS41LjUgMCAwIDEgMCAxaC0ydjJhLjUuNSAwIDAgMS0xIDB2LTJoLTJhLjUuNSAwIDAgMSAwLTFoMnYtMkEuNS41IDAgMCAxIDQgMW01IDExYS41LjUgMCAwIDEgLjUtLjVoNWEuNS41IDAgMCAxIDAgMWgtNUEuNS41IDAgMCAxIDkgMTIiLz4KPC9zdmc+)*/
const PlusSlashMinus: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="plus-slash-minus"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m1.854 14.854 13-13a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708M4 1a.5.5 0 0 1 .5.5v2h2a.5.5 0 0 1 0 1h-2v2a.5.5 0 0 1-1 0v-2h-2a.5.5 0 0 1 0-1h2v-2A.5.5 0 0 1 4 1m5 11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5A.5.5 0 0 1 9 12"/>
</svg>
      )}
    />
  );

export default PlusSlashMinus;

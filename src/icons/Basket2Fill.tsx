import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![basket2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS45MjkgMS43NTdhLjUuNSAwIDEgMC0uODU4LS41MTRMMi4yMTcgNkguNWEuNS41IDAgMCAwLS41LjV2MWEuNS41IDAgMCAwIC41LjVoLjYyM2wxLjg0NCA2LjQ1NkEuNzUuNzUgMCAwIDAgMy42OSAxNWg4LjYyMmEuNzUuNzUgMCAwIDAgLjcyMi0uNTQ0TDE0Ljg3NyA4aC42MjNhLjUuNSAwIDAgMCAuNS0uNXYtMWEuNS41IDAgMCAwLS41LS41aC0xLjcxN0wxMC45MyAxLjI0M2EuNS41IDAgMSAwLS44NTguNTE0TDEyLjYxNyA2SDMuMzgzek00IDEwYTEgMSAwIDAgMSAyIDB2MmExIDEgMCAxIDEtMiAwem0zIDBhMSAxIDAgMCAxIDIgMHYyYTEgMSAwIDEgMS0yIDB6bTQtMWExIDEgMCAwIDEgMSAxdjJhMSAxIDAgMSAxLTIgMHYtMmExIDEgMCAwIDEgMS0xIi8+Cjwvc3ZnPg==)*/
const Basket2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="basket2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default Basket2Fill;

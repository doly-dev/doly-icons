import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-forward-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuNSAzLjVhLjUuNSAwIDAgMSAuNS41djhhLjUuNSAwIDAgMS0xIDBWOC43NTNsLTYuMjY3IDMuNjM2Yy0uNTQuMzEzLTEuMjMzLS4wNjYtMS4yMzMtLjY5N3YtMi45NGwtNi4yNjcgMy42MzZDLjY5MyAxMi43MDMgMCAxMi4zMjQgMCAxMS42OTNWNC4zMDhjMC0uNjMuNjkzLTEuMDEgMS4yMzMtLjY5Nkw3LjUgNy4yNDh2LTIuOTRjMC0uNjMuNjkzLTEuMDEgMS4yMzMtLjY5NkwxNSA3LjI0OFY0YS41LjUgMCAwIDEgLjUtLjUiLz4KPC9zdmc+)*/
const SkipForwardFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-forward-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5"/>
</svg>
      )}
    />
  );

export default SkipForwardFill;

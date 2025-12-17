import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuNSAzLjVhLjUuNSAwIDAgMSAuNS41djhhLjUuNSAwIDAgMS0xIDBWOC43NTJsLTYuMjY3IDMuNjM2Yy0uNTIuMzAyLTEuMjMzLS4wNDMtMS4yMzMtLjY5NnYtMi45NGwtNi4yNjcgMy42MzZDLjcxMyAxMi42OSAwIDEyLjM0NSAwIDExLjY5MlY0LjMwOGMwLS42NTMuNzEzLS45OTggMS4yMzMtLjY5Nkw3LjUgNy4yNDh2LTIuOTRjMC0uNjUzLjcxMy0uOTk4IDEuMjMzLS42OTZMMTUgNy4yNDhWNGEuNS41IDAgMCAxIC41LS41TTEgNC42MzN2Ni43MzRMNi44MDQgOHptNy41IDB2Ni43MzRMMTQuMzA0IDh6Ii8+Cjwvc3ZnPg==)*/
const SkipForward: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-forward"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5M1 4.633v6.734L6.804 8zm7.5 0v6.734L14.304 8z"/>
</svg>
      )}
    />
  );

export default SkipForward;

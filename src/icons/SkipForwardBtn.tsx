import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-forward-btn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC43OSA1LjA5M0EuNS41IDAgMCAwIDQgNS41djVhLjUuNSAwIDAgMCAuNzkuNDA3TDcuNSA4Ljk3MlYxMC41YS41LjUgMCAwIDAgLjc5LjQwN0wxMSA4Ljk3MlYxMC41YS41LjUgMCAwIDAgMSAwdi01YS41LjUgMCAwIDAtMSAwdjEuNTI4TDguMjkgNS4wOTNhLjUuNSAwIDAgMC0uNzkuNDA3djEuNTI4eiIvPgogIDxwYXRoIGQ9Ik0wIDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTE1IDBhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF6Ii8+Cjwvc3ZnPg==)*/
const SkipForwardBtn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-forward-btn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.79 5.093A.5.5 0 0 0 4 5.5v5a.5.5 0 0 0 .79.407L7.5 8.972V10.5a.5.5 0 0 0 .79.407L11 8.972V10.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 5.093a.5.5 0 0 0-.79.407v1.528z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default SkipForwardBtn;

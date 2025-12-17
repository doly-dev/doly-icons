import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![skip-start-btn](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS43MSA1LjA5M2EuNS41IDAgMCAxIC43OS40MDd2NWEuNS41IDAgMCAxLS43OS40MDdMNyA4Ljk3MlYxMC41YS41LjUgMCAwIDEtMSAwdi01YS41LjUgMCAwIDEgMSAwdjEuNTI4eiIvPgogIDxwYXRoIGQ9Ik0wIDRhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJ6bTE1IDBhMSAxIDAgMCAwLTEtMUgyYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDEyYTEgMSAwIDAgMCAxLTF6Ii8+Cjwvc3ZnPg==)*/
const SkipStartBtn: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-start-btn"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.71 5.093a.5.5 0 0 1 .79.407v5a.5.5 0 0 1-.79.407L7 8.972V10.5a.5.5 0 0 1-1 0v-5a.5.5 0 0 1 1 0v1.528z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default SkipStartBtn;

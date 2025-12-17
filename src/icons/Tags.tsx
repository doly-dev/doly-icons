import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tags](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMyAydjQuNTg2bDcgN0wxNC41ODYgOWwtNy03ek0yIDJhMSAxIDAgMCAxIDEtMWg0LjU4NmExIDEgMCAwIDEgLjcwNy4yOTNsNyA3YTEgMSAwIDAgMSAwIDEuNDE0bC00LjU4NiA0LjU4NmExIDEgMCAwIDEtMS40MTQgMGwtNy03QTEgMSAwIDAgMSAyIDYuNTg2eiIvPgogIDxwYXRoIGQ9Ik01LjUgNWEuNS41IDAgMSAxIDAtMSAuNS41IDAgMCAxIDAgMW0wIDFhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNNMSA3LjA4NmExIDEgMCAwIDAgLjI5My43MDdMOC43NSAxNS4yNWwtLjA0My4wNDNhMSAxIDAgMCAxLTEuNDE0IDBsLTctN0ExIDEgMCAwIDEgMCA3LjU4NlYzYTEgMSAwIDAgMSAxLTF6Ii8+Cjwvc3ZnPg==)*/
const Tags: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tags"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 2v4.586l7 7L14.586 9l-7-7zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586z"/>
  <path d="M5.5 5a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1z"/>
</svg>
      )}
    />
  );

export default Tags;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS44NTQgNC44NTRhLjUuNSAwIDEgMC0uNzA4LS43MDhsLTMuNSAzLjVhLjUuNSAwIDAgMCAwIC43MDhsMy41IDMuNWEuNS41IDAgMCAwIC43MDgtLjcwOEwyLjcwNyA4em00LjI5MiAwYS41LjUgMCAwIDEgLjcwOC0uNzA4bDMuNSAzLjVhLjUuNSAwIDAgMSAwIC43MDhsLTMuNSAzLjVhLjUuNSAwIDAgMS0uNzA4LS43MDhMMTMuMjkzIDh6Ii8+Cjwvc3ZnPg==)*/
const Code: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="code"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z"/>
</svg>
      )}
    />
  );

export default Code;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![journal-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC44NTQgNi4xNDZhLjUuNSAwIDAgMSAwIC43MDhsLTMgM2EuNS41IDAgMCAxLS43MDggMGwtMS41LTEuNWEuNS41IDAgMSAxIC43MDgtLjcwOEw3LjUgOC43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAgMSAuNzA4IDAiLz4KICA8cGF0aCBkPSJNMyAwaDEwYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJ2LTFoMXYxYTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTFIM2ExIDEgMCAwIDAtMSAxdjFIMVYyYTIgMiAwIDAgMSAyLTIiLz4KICA8cGF0aCBkPSJNMSA1di0uNWEuNS41IDAgMCAxIDEgMFY1aC41YS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEgMC0xem0wIDN2LS41YS41LjUgMCAwIDEgMSAwVjhoLjVhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTF6bTAgM3YtLjVhLjUuNSAwIDAgMSAxIDB2LjVoLjVhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTF6Ii8+Cjwvc3ZnPg==)*/
const JournalCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="journal-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
      )}
    />
  );

export default JournalCheck;

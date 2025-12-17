import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![journal-arrow-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDVhLjUuNSAwIDAgMSAuNS41djMuNzkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDggMGwtMi0yYS41LjUgMCAxIDEgLjcwOC0uNzA4TDcuNSA5LjI5M1Y1LjVBLjUuNSAwIDAgMSA4IDUiLz4KICA8cGF0aCBkPSJNMyAwaDEwYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgzYTIgMiAwIDAgMS0yLTJ2LTFoMXYxYTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTFIM2ExIDEgMCAwIDAtMSAxdjFIMVYyYTIgMiAwIDAgMSAyLTIiLz4KICA8cGF0aCBkPSJNMSA1di0uNWEuNS41IDAgMCAxIDEgMFY1aC41YS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEgMC0xem0wIDN2LS41YS41LjUgMCAwIDEgMSAwVjhoLjVhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTF6bTAgM3YtLjVhLjUuNSAwIDAgMSAxIDB2LjVoLjVhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTF6Ii8+Cjwvc3ZnPg==)*/
const JournalArrowDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="journal-arrow-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
      )}
    />
  );

export default JournalArrowDown;

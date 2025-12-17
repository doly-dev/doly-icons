import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![journal-code](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjY0NiA1LjY0NmEuNS41IDAgMCAxIC43MDggMGwyIDJhLjUuNSAwIDAgMSAwIC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOCA4LjY0NiA2LjM1NGEuNS41IDAgMCAxIDAtLjcwOG0tMS4yOTIgMGEuNS41IDAgMCAwLS43MDggMGwtMiAyYS41LjUgMCAwIDAgMCAuNzA4bDIgMmEuNS41IDAgMCAwIC43MDgtLjcwOEw1LjcwNyA4bDEuNjQ3LTEuNjQ2YS41LjUgMCAwIDAgMC0uNzA4Ii8+CiAgPHBhdGggZD0iTTMgMGgxMGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIM2EyIDIgMCAwIDEtMi0ydi0xaDF2MWExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTFWMmExIDEgMCAwIDAtMS0xSDNhMSAxIDAgMCAwLTEgMXYxSDFWMmEyIDIgMCAwIDEgMi0yIi8+CiAgPHBhdGggZD0iTTEgNXYtLjVhLjUuNSAwIDAgMSAxIDBWNWguNWEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxIDAtMXptMCAzdi0uNWEuNS41IDAgMCAxIDEgMFY4aC41YS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEgMC0xem0wIDN2LS41YS41LjUgMCAwIDEgMSAwdi41aC41YS41LjUgMCAwIDEgMCAxaC0yYS41LjUgMCAwIDEgMC0xeiIvPgo8L3N2Zz4=)*/
const JournalCode: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="journal-code"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8.646 5.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 8 8.646 6.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 8l1.647-1.646a.5.5 0 0 0 0-.708"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
      )}
    />
  );

export default JournalCode;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![journal-bookmark-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDFoNnY3YS41LjUgMCAwIDEtLjc1Ny40MjlMOSA3LjA4MyA2Ljc1NyA4LjQzQS41LjUgMCAwIDEgNiA4eiIvPgogIDxwYXRoIGQ9Ik0zIDBoMTBhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDNhMiAyIDAgMCAxLTItMnYtMWgxdjFhMSAxIDAgMCAwIDEgMWgxMGExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMUgzYTEgMSAwIDAgMC0xIDF2MUgxVjJhMiAyIDAgMCAxIDItMiIvPgogIDxwYXRoIGQ9Ik0xIDV2LS41YS41LjUgMCAwIDEgMSAwVjVoLjVhLjUuNSAwIDAgMSAwIDFoLTJhLjUuNSAwIDAgMSAwLTF6bTAgM3YtLjVhLjUuNSAwIDAgMSAxIDBWOGguNWEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxIDAtMXptMCAzdi0uNWEuNS41IDAgMCAxIDEgMHYuNWguNWEuNS41IDAgMCAxIDAgMWgtMmEuNS41IDAgMCAxIDAtMXoiLz4KPC9zdmc+)*/
const JournalBookmarkFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="journal-bookmark-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
  <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
  <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
</svg>
      )}
    />
  );

export default JournalBookmarkFill;

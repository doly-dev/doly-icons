import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-lock](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA1YTEgMSAwIDAgMSAxIDF2MUg3VjZhMSAxIDAgMCAxIDEtMW0yIDIuMDc2VjZhMiAyIDAgMSAwLTQgMHYxLjA3NmMtLjU0LjE2Ni0xIC41OTctMSAxLjIyNHYyLjRjMCAuODE2Ljc4MSAxLjMgMS41IDEuM2gzYy43MTkgMCAxLjUtLjQ4NCAxLjUtMS4zVjguM2MwLS42MjctLjQ2LTEuMDU4LTEtMS4yMjRNNi4xMDUgOC4xMjVBLjY0LjY0IDAgMCAxIDYuNSA4aDNhLjY0LjY0IDAgMCAxIC4zOTUuMTI1Yy4wODUuMDY4LjEwNS4xMzMuMTA1LjE3NXYyLjRjMCAuMDQyLS4wMi4xMDctLjEwNS4xNzVBLjY0LjY0IDAgMCAxIDkuNSAxMWgtM2EuNjQuNjQgMCAwIDEtLjM5NS0uMTI1QzYuMDIgMTAuODA3IDYgMTAuNzQyIDYgMTAuN1Y4LjNjMC0uMDQyLjAyLS4xMDcuMTA1LS4xNzUiLz4KICA8cGF0aCBkPSJNNCAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0yem0wIDFoOGExIDEgMCAwIDEgMSAxdjEyYTEgMSAwIDAgMS0xIDFINGExIDEgMCAwIDEtMS0xVjJhMSAxIDAgMCAxIDEtMSIvPgo8L3N2Zz4=)*/
const FileLock: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-lock"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 5a1 1 0 0 1 1 1v1H7V6a1 1 0 0 1 1-1m2 2.076V6a2 2 0 1 0-4 0v1.076c-.54.166-1 .597-1 1.224v2.4c0 .816.781 1.3 1.5 1.3h3c.719 0 1.5-.484 1.5-1.3V8.3c0-.627-.46-1.058-1-1.224M6.105 8.125A.64.64 0 0 1 6.5 8h3a.64.64 0 0 1 .395.125c.085.068.105.133.105.175v2.4c0 .042-.02.107-.105.175A.64.64 0 0 1 9.5 11h-3a.64.64 0 0 1-.395-.125C6.02 10.807 6 10.742 6 10.7V8.3c0-.042.02-.107.105-.175"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default FileLock;

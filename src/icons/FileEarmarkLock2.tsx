import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-earmark-lock2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTAgN3YxLjA3NmMuNTQuMTY2IDEgLjU5NyAxIDEuMjI0djIuNGMwIC44MTYtLjc4MSAxLjMtMS41IDEuM2gtM2MtLjcxOSAwLTEuNS0uNDg0LTEuNS0xLjNWOS4zYzAtLjYyNy40Ni0xLjA1OCAxLTEuMjI0VjdhMiAyIDAgMSAxIDQgME03IDd2MWgyVjdhMSAxIDAgMCAwLTIgMCIvPgogIDxwYXRoIGQ9Ik0xNCAxNFY0LjVMOS41IDBINGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoOGEyIDIgMCAwIDAgMi0yTTkuNSAzQTEuNSAxLjUgMCAwIDAgMTEgNC41aDJWMTRhMSAxIDAgMCAxLTEgMUg0YTEgMSAwIDAgMS0xLTFWMmExIDEgMCAwIDEgMS0xaDUuNXoiLz4KPC9zdmc+)*/
const FileEarmarkLock2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-earmark-lock2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10 7v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V9.3c0-.627.46-1.058 1-1.224V7a2 2 0 1 1 4 0M7 7v1h2V7a1 1 0 0 0-2 0"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>
      )}
    />
  );

export default FileEarmarkLock2;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-lock2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNyA2YTEgMSAwIDAgMSAyIDB2MUg3eiIvPgogIDxwYXRoIGQ9Ik0xMiAwSDRhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDhhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJtLTIgNnYxLjA3NmMuNTQuMTY2IDEgLjU5NyAxIDEuMjI0djIuNGMwIC44MTYtLjc4MSAxLjMtMS41IDEuM2gtM2MtLjcxOSAwLTEuNS0uNDg0LTEuNS0xLjNWOC4zYzAtLjYyNy40Ni0xLjA1OCAxLTEuMjI0VjZhMiAyIDAgMSAxIDQgMCIvPgo8L3N2Zz4=)*/
const FileLock2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-lock2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7 6a1 1 0 0 1 2 0v1H7z"/>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-2 6v1.076c.54.166 1 .597 1 1.224v2.4c0 .816-.781 1.3-1.5 1.3h-3c-.719 0-1.5-.484-1.5-1.3V8.3c0-.627.46-1.058 1-1.224V6a2 2 0 1 1 4 0"/>
</svg>
      )}
    />
  );

export default FileLock2Fill;

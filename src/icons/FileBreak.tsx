import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-break](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxMC41YS41LjUgMCAwIDEgLjUtLjVoMTVhLjUuNSAwIDAgMSAwIDFILjVhLjUuNSAwIDAgMS0uNS0uNU0xMiAwSDRhMiAyIDAgMCAwLTIgMnY3aDFWMmExIDEgMCAwIDEgMS0xaDhhMSAxIDAgMCAxIDEgMXY3aDFWMmEyIDIgMCAwIDAtMi0ybTIgMTJoLTF2MmExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMXYtMkgydjJhMiAyIDAgMCAwIDIgMmg4YTIgMiAwIDAgMCAyLTJ6Ii8+Cjwvc3ZnPg==)*/
const FileBreak: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-break"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 10.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5M12 0H4a2 2 0 0 0-2 2v7h1V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v7h1V2a2 2 0 0 0-2-2m2 12h-1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2H2v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2z"/>
</svg>
      )}
    />
  );

export default FileBreak;

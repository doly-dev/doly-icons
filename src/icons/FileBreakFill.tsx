import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-break-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAwaDhhMiAyIDAgMCAxIDIgMnY3SDJWMmEyIDIgMCAwIDEgMi0yTTIgMTJoMTJ2MmEyIDIgMCAwIDEtMiAySDRhMiAyIDAgMCAxLTItMnpNLjUgMTBhLjUuNSAwIDAgMCAwIDFoMTVhLjUuNSAwIDAgMCAwLTF6Ii8+Cjwvc3ZnPg==)*/
const FileBreakFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-break-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 0h8a2 2 0 0 1 2 2v7H2V2a2 2 0 0 1 2-2M2 12h12v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zM.5 10a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default FileBreakFill;

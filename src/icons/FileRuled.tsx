import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-ruled](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXY0aDEwVjJhMSAxIDAgMCAwLTEtMXptOSA2SDZ2Mmg3em0wIDNINnYyaDd6bTAgM0g2djJoNmExIDEgMCAwIDAgMS0xem0tOCAydi0ySDN2MWExIDEgMCAwIDAgMSAxem0tMi0zaDJ2LTJIM3ptMC0zaDJWN0gzeiIvPgo8L3N2Zz4=)*/
const FileRuled: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-ruled"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v4h10V2a1 1 0 0 0-1-1zm9 6H6v2h7zm0 3H6v2h7zm0 3H6v2h6a1 1 0 0 0 1-1zm-8 2v-2H3v1a1 1 0 0 0 1 1zm-2-3h2v-2H3zm0-3h2V7H3z"/>
</svg>
      )}
    />
  );

export default FileRuled;

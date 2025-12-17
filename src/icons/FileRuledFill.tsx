import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-ruled-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMEg0YTIgMiAwIDAgMC0yIDJ2NGgxMlYyYTIgMiAwIDAgMC0yLTJtMiA3SDZ2Mmg4em0wIDNINnYyaDh6bTAgM0g2djNoNmEyIDIgMCAwIDAgMi0yem0tOSAzdi0zSDJ2MWEyIDIgMCAwIDAgMiAyem0tMy00aDN2LTJIMnptMC0zaDNWN0gyeiIvPgo8L3N2Zz4=)*/
const FileRuledFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-ruled-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7H6v2h8zm0 3H6v2h8zm0 3H6v3h6a2 2 0 0 0 2-2zm-9 3v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2z"/>
</svg>
      )}
    />
  );

export default FileRuledFill;

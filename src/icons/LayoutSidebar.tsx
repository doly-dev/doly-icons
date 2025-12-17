import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![layout-sidebar](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAzYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptNS0xdjEyaDlhMSAxIDAgMCAwIDEtMVYzYTEgMSAwIDAgMC0xLTF6TTQgMkgyYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgyeiIvPgo8L3N2Zz4=)*/
const LayoutSidebar: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="layout-sidebar"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z"/>
</svg>
      )}
    />
  );

export default LayoutSidebar;

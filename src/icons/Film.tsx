import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![film](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAxYTEgMSAwIDAgMSAxLTFoMTRhMSAxIDAgMCAxIDEgMXYxNGExIDEgMCAwIDEtMSAxSDFhMSAxIDAgMCAxLTEtMXptNCAwdjZoOFYxem04IDhINHY2aDh6TTEgMXYyaDJWMXptMiAzSDF2Mmgyek0xIDd2MmgyVjd6bTIgM0gxdjJoMnptLTIgM3YyaDJ2LTJ6TTE1IDFoLTJ2Mmgyem0tMiAzdjJoMlY0em0yIDNoLTJ2Mmgyem0tMiAzdjJoMnYtMnptMiAzaC0ydjJoMnoiLz4KPC9zdmc+)*/
const Film: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="film"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
</svg>
      )}
    />
  );

export default Film;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bounding-box](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSAyVjBIMHY1aDJ2NkgwdjVoNXYtMmg2djJoNXYtNWgtMlY1aDJWMGgtNXYyem02IDF2MmgydjZoLTJ2Mkg1di0ySDNWNWgyVjN6bTEtMmgzdjNoLTN6bTMgMTF2M2gtM3YtM3pNNCAxNUgxdi0zaDN6TTEgNFYxaDN2M3oiLz4KPC9zdmc+)*/
const BoundingBox: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bounding-box"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2zm6 1v2h2v6h-2v2H5v-2H3V5h2V3zm1-2h3v3h-3zm3 11v3h-3v-3zM4 15H1v-3h3zM1 4V1h3v3z"/>
</svg>
      )}
    />
  );

export default BoundingBox;

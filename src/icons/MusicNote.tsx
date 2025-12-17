import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![music-note](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOSAxM2MwIDEuMTA1LTEuMTIgMi0yLjUgMlM0IDE0LjEwNSA0IDEzczEuMTItMiAyLjUtMiAyLjUuODk1IDIuNSAyIi8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOSAzdjEwSDhWM3oiLz4KICA8cGF0aCBkPSJNOCAyLjgyYTEgMSAwIDAgMSAuODA0LS45OGwzLS42QTEgMSAwIDAgMSAxMyAyLjIyVjRMOCA1eiIvPgo8L3N2Zz4=)*/
const MusicNote: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="music-note"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
  <path fillRule="evenodd" d="M9 3v10H8V3z"/>
  <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5z"/>
</svg>
      )}
    />
  );

export default MusicNote;

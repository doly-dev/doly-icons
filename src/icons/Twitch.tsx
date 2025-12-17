import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![twitch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy44NTcgMCAxIDIuODU3djEwLjI4NmgzLjQyOVYxNmwyLjg1Ny0yLjg1N0g5LjU3TDE0LjcxNCA4VjB6bTkuNzE0IDcuNDI5LTIuMjg1IDIuMjg1SDlsLTIgMnYtMkg0LjQyOVYxLjE0M2g5LjE0MnoiLz4KICA8cGF0aCBkPSJNMTEuODU3IDMuMTQzaC0xLjE0M1Y2LjU3aDEuMTQzem0tMy4xNDMgMEg3LjU3MVY2LjU3aDEuMTQzeiIvPgo8L3N2Zz4=)*/
const Twitch: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="twitch"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z"/>
  <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z"/>
</svg>
      )}
    />
  );

export default Twitch;

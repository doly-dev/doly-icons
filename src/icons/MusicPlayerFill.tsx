import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const MusicPlayerFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="music-player-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm1 2h6a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
      )}
    />
  );

export default MusicPlayerFill;

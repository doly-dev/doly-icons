import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const WindowSplit: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="window-split"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1"/>
  <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1zM1 13V6h6.5v8H2a1 1 0 0 1-1-1m7.5 1V6H15v7a1 1 0 0 1-1 1z"/>
</svg>
      )}
    />
  );

export default WindowSplit;

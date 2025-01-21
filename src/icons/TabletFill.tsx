import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const TabletFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tablet-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0"/>
</svg>
      )}
    />
  );

export default TabletFill;

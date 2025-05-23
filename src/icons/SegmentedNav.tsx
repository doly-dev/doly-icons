import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const SegmentedNav: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="segmented-nav"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm6 3h4V5H6zm9-1V6a1 1 0 0 0-1-1h-3v4h3a1 1 0 0 0 1-1"/>
</svg>
      )}
    />
  );

export default SegmentedNav;

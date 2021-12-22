import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const LayoutSidebarReverse = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="layout-sidebar-reverse" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M16 3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3zm-5-1v12H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h9zm1 0h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2V2z"/>
</svg>
    </IconBase>
  );
});

LayoutSidebarReverse.displayName = 'LayoutSidebarReverse';

export default LayoutSidebarReverse;  

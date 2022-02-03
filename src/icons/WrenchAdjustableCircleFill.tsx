import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const WrenchAdjustableCircleFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="wrench-adjustable-circle-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm-6.202-4.751a7.031 7.031 0 0 0 2.949 2.95l1.658-1.989a4.49 4.49 0 0 0 1.592.29c.652 0 1.273-.139 1.833-.39L8.497 9l-1-2.5 3.826-1.53a4.5 4.5 0 0 0-7.537 4.623l-1.988 1.656ZM12.496 8a4.491 4.491 0 0 1-1.703 3.526L9.497 8.5l2.959-1.11c.027.2.04.403.04.61Zm-5.791.139a.25.25 0 0 0-.288-.376l-1.5.5.159.474.808-.27-.595.894a.25.25 0 0 0 .287.376l.808-.27-.595.894a.25.25 0 0 0 .287.376l1.5-.5-.159-.474-.808.27.596-.894a.25.25 0 0 0-.288-.376l-.808.27.596-.894Z"/>
</svg>
    </IconBase>
  );
});

WrenchAdjustableCircleFill.displayName = 'WrenchAdjustableCircleFill';

export default WrenchAdjustableCircleFill;  

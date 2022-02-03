import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const WrenchAdjustable = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="wrench-adjustable" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M16 4.5a4.492 4.492 0 0 1-1.703 3.526L13 5l2.959-1.11c.027.2.041.403.041.61ZM11.5 9c.653 0 1.273-.139 1.833-.39L12 5.5 11 3l3.826-1.53A4.5 4.5 0 0 0 7.29 6.092l-6.116 5.096a2.583 2.583 0 1 0 3.638 3.638L9.908 8.71A4.49 4.49 0 0 0 11.5 9Zm-1.292-4.361a.25.25 0 0 0-.287-.376l-1.5.5.158.474.809-.27-.596.894a.25.25 0 0 0 .287.376l.809-.27-.596.894a.25.25 0 0 0 .287.376l1.5-.5-.158-.474-.809.27.596-.894a.25.25 0 0 0-.287-.376l-.809.27.596-.894ZM3 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg>
    </IconBase>
  );
});

WrenchAdjustable.displayName = 'WrenchAdjustable';

export default WrenchAdjustable;  

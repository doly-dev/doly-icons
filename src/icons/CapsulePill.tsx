import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const CapsulePill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="capsule-pill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M11.02 5.364a3 3 0 0 0-4.242-4.243L1.121 6.778a3 3 0 1 0 4.243 4.243l5.657-5.657Zm-6.413-.657 2.878-2.879a2 2 0 1 1 2.829 2.829L7.435 7.536 4.607 4.707ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm-.5 1.041a3 3 0 0 0 0 5.918V9.04Zm1 5.918a3 3 0 0 0 0-5.918v5.918Z"/>
</svg>
    </IconBase>
  );
});

CapsulePill.displayName = 'CapsulePill';

export default CapsulePill;  

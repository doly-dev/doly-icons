import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Valentine = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="valentine" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M0 2.934V13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1v-.923a1 1 0 0 0-1.141-.99l-13 1.857a1 1 0 0 0-.859.99ZM1 13V3h14v10H1Zm7-7.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
  <path stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".5" d="M2.25 5.75v-1.5h1.5m10 1.5v-1.5h-1.5m-10 6v1.5h1.5m10-1.5v1.5h-1.5"/>
</svg>
    </IconBase>
  );
});

Valentine.displayName = 'Valentine';

export default Valentine;  

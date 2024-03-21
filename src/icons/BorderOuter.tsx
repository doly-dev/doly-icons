import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const BorderOuter = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="border-outer" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M7.5 1.906v.938h1v-.938zm0 1.875v.938h1V3.78h-1zm0 1.875v.938h1v-.938zM1.906 8.5h.938v-1h-.938zm1.875 0h.938v-1H3.78v1zm1.875 0h.938v-1h-.938zm2.813 0v-.031H8.5V7.53h-.031V7.5H7.53v.031H7.5v.938h.031V8.5zm.937 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zm1.875 0h.938v-1h-.938zM7.5 9.406v.938h1v-.938zm0 1.875v.938h1v-.938zm0 1.875v.938h1v-.938z"/>
  <path d="M0 0v16h16V0zm1 1h14v14H1z"/>
</svg>
    </IconBase>
  );
});

BorderOuter.displayName = 'BorderOuter';

export default BorderOuter;  

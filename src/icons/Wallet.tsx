import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Wallet = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="wallet" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a2 2 0 0 1-1-.268M1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1"/>
</svg>
    </IconBase>
  );
});

Wallet.displayName = 'Wallet';

export default Wallet;  

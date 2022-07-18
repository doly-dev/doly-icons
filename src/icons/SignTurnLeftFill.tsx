import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const SignTurnLeftFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="sign-turn-left-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM7 8.466V7h1.5A1.5 1.5 0 0 1 10 8.5V11h1V8.5A2.5 2.5 0 0 0 8.5 6H7V4.534a.25.25 0 0 0-.41-.192L4.23 6.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 7 8.466Z"/>
</svg>
    </IconBase>
  );
});

SignTurnLeftFill.displayName = 'SignTurnLeftFill';

export default SignTurnLeftFill;  

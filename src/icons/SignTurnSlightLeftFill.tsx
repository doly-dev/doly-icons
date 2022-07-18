import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const SignTurnSlightLeftFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="sign-turn-slight-left-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435ZM6.864 8.368l.8-1.386.607.364A1.5 1.5 0 0 1 9 8.632V11h1V8.632A2.5 2.5 0 0 0 8.786 6.49l-.62-.373.665-1.154a.25.25 0 0 0-.259-.371l-3.026.523a.25.25 0 0 0-.192.333l1.06 2.882a.25.25 0 0 0 .451.039Z"/>
</svg>
    </IconBase>
  );
});

SignTurnSlightLeftFill.displayName = 'SignTurnSlightLeftFill';

export default SignTurnSlightLeftFill;  

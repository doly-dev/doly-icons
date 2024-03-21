import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Box2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="box2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3zM7.5 1H3.75L1.5 4h6zm1 0v3h6l-2.25-3zM15 5H1v10h14z"/>
</svg>
    </IconBase>
  );
});

Box2.displayName = 'Box2';

export default Box2;  

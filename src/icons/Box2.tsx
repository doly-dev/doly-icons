import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Box2 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="box2" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path stroke="#000" strokeLinejoin="round" d="M.5 4.5V15a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5V4.5m-15 0L3.35.7a.5.5 0 0 1 .4-.2H8m-7.5 4H8m7.5 0L12.65.7a.5.5 0 0 0-.4-.2H8m7.5 4H8m0-4v4"/>
</svg>
    </IconBase>
  );
});

Box2.displayName = 'Box2';

export default Box2;  

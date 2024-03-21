import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Calendar3WeekFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="calendar3-week-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0m5-2a1 1 0 1 1 0-2 1 1 0 0 1 0 2M2 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
</svg>
    </IconBase>
  );
});

Calendar3WeekFill.displayName = 'Calendar3WeekFill';

export default Calendar3WeekFill;  

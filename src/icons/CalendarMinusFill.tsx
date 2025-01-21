import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const CalendarMinusFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar-minus-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M6 10h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default CalendarMinusFill;

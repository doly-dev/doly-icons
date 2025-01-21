import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Calendar3EventFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar3-event-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m12-8a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/>
</svg>
      )}
    />
  );

export default Calendar3EventFill;

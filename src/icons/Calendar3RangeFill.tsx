import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Calendar3RangeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar3-range-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 5h-6a1 1 0 0 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 0 0 0-2H0V3h16zm-2-5a2 2 0 0 1 2 2H0a2 2 0 0 1 2-2z"/>
</svg>
      )}
    />
  );

export default Calendar3RangeFill;

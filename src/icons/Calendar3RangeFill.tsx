import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Calendar3RangeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar3-range-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2zM0 8V3h16v2h-6a1 1 0 1 0 0 2h6v7a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4h6a1 1 0 1 0 0-2z"/>
</svg>
      )}
    />
  );

export default Calendar3RangeFill;

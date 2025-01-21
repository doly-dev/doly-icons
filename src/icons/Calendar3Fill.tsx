import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Calendar3Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="calendar3-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3z"/>
</svg>
      )}
    />
  );

export default Calendar3Fill;

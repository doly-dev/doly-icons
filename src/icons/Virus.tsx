import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Virus = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="virus" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M8 0a1 1 0 0 1 1 1v1.402c0 .511.677.693.933.25l.7-1.214a1 1 0 0 1 1.733 1l-.701 1.214c-.256.443.24.939.683.683l1.214-.701a1 1 0 0 1 1 1.732l-1.214.701c-.443.256-.262.933.25.933H15a1 1 0 1 1 0 2h-1.402c-.512 0-.693.677-.25.933l1.214.701a1 1 0 1 1-1 1.732l-1.214-.7c-.443-.257-.939.24-.683.682l.701 1.214a1 1 0 1 1-1.732 1l-.701-1.214c-.256-.443-.933-.262-.933.25V15a1 1 0 1 1-2 0v-1.402c0-.512-.677-.693-.933-.25l-.701 1.214a1 1 0 0 1-1.732-1l.7-1.214c.257-.443-.24-.939-.682-.683l-1.214.701a1 1 0 1 1-1-1.732l1.214-.701c.443-.256.261-.933-.25-.933H1a1 1 0 1 1 0-2h1.402c.511 0 .693-.677.25-.933l-1.214-.701a1 1 0 1 1 1-1.732l1.214.701c.443.256.939-.24.683-.683l-.701-1.214a1 1 0 0 1 1.732-1l.701 1.214c.256.443.933.261.933-.25V1a1 1 0 0 1 1-1Zm2 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm1 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-3a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
</svg>
    </IconBase>
  );
});

Virus.displayName = 'Virus';

export default Virus;  
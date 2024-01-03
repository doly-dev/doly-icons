import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const MarkerTip = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="marker-tip" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-4.5 6.064-1.281-4.696A.5.5 0 0 0 9.736 9H6.264a.5.5 0 0 0-.483.368l-1.28 4.696A6.968 6.968 0 0 0 8 15c1.275 0 2.47-.34 3.5-.936Zm.873-.598a7 7 0 1 0-8.746 0l1.19-4.36a1.5 1.5 0 0 1 1.31-1.1l1.155-3.851c.213-.713 1.223-.713 1.436 0l1.156 3.851a1.5 1.5 0 0 1 1.31 1.1l1.189 4.36Z"/>
</svg>
    </IconBase>
  );
});

MarkerTip.displayName = 'MarkerTip';

export default MarkerTip;  
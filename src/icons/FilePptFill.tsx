import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const FilePptFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="file-ppt-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M8.188 8.5H7V5h1.188a1.75 1.75 0 1 1 0 3.5z"/>
  <path d="M4 0h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm3 4a1 1 0 0 0-1 1v6.5a.5.5 0 0 0 1 0v-2h1.188a2.75 2.75 0 0 0 0-5.5H7z"/>
</svg>
    </IconBase>
  );
});

FilePptFill.displayName = 'FilePptFill';

export default FilePptFill;  

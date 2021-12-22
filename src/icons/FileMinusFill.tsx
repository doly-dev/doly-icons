import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const FileMinusFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="file-minus-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM6 7.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1 0-1z"/>
</svg>
    </IconBase>
  );
});

FileMinusFill.displayName = 'FileMinusFill';

export default FileMinusFill;  

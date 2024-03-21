import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const FileSpreadsheetFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="file-spreadsheet-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M12 0H4a2 2 0 0 0-2 2v4h12V2a2 2 0 0 0-2-2m2 7h-4v2h4zm0 3h-4v2h4zm0 3h-4v3h2a2 2 0 0 0 2-2zm-5 3v-3H6v3zm-4 0v-3H2v1a2 2 0 0 0 2 2zm-3-4h3v-2H2zm0-3h3V7H2zm4 0V7h3v2zm0 1h3v2H6z"/>
</svg>
    </IconBase>
  );
});

FileSpreadsheetFill.displayName = 'FileSpreadsheetFill';

export default FileSpreadsheetFill;  

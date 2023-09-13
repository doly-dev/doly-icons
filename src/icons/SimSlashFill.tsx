import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const SimSlashFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="sim-slash-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="m11.646.44.897.896-1.703 1.703A1.506 1.506 0 0 0 10.5 3h-5A1.5 1.5 0 0 0 4 4.5v5.379l-2 2V1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44ZM8.5 5.378 9.879 4H8.5v1.379ZM5 8.879 6.879 7H5v1.879Zm6-1.758L9.121 9H11V7.121Zm-3.5 3.5L6.121 12H7.5v-1.379ZM5.5 13c-.117 0-.23-.013-.34-.039L2.502 15.62c.265.236.615.38.998.38h9a1.5 1.5 0 0 0 1.5-1.5V4.121l-2 2V11.5a1.5 1.5 0 0 1-1.5 1.5h-5ZM5 4.5a.5.5 0 0 1 .5-.5h2v2H5V4.5ZM8.5 10H11v1.5a.5.5 0 0 1-.5.5h-2v-2Zm6.354-8.146a.5.5 0 0 0-.708-.708l-13 13a.5.5 0 0 0 .708.708l13-13Z"/>
</svg>
    </IconBase>
  );
});

SimSlashFill.displayName = 'SimSlashFill';

export default SimSlashFill;  

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const HCircle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="h-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5-3.998V12H9.67V8.455H6.33V12H5V4.002h1.33v3.322h3.34V4.002z"/>
</svg>
      )}
    />
  );

export default HCircle;

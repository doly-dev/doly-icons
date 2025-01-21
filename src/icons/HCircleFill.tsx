import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const HCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="h-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5-3.998H9.67v3.322H6.33V4.002H5V12h1.33V8.455h3.34V12H11z"/>
</svg>
      )}
    />
  );

export default HCircleFill;

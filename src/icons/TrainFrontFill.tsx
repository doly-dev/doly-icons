import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const TrainFrontFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="train-front-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M10.621.515C8.647.02 7.353.02 5.38.515c-.924.23-1.982.766-2.78 1.22C1.566 2.322 1 3.432 1 4.582V13.5A2.5 2.5 0 0 0 3.5 16h9a2.5 2.5 0 0 0 2.5-2.5V4.583c0-1.15-.565-2.26-1.6-2.849-.797-.453-1.855-.988-2.779-1.22ZM6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-2 2A1.5 1.5 0 0 0 3 5.5v2A1.5 1.5 0 0 0 4.5 9h7A1.5 1.5 0 0 0 13 7.5v-2A1.5 1.5 0 0 0 11.5 4h-7Zm.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm0 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-3-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM4 5.5a.5.5 0 0 1 .5-.5h3v3h-3a.5.5 0 0 1-.5-.5v-2ZM8.5 8V5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3Z"/>
</svg>
    </IconBase>
  );
});

TrainFrontFill.displayName = 'TrainFrontFill';

export default TrainFrontFill;  

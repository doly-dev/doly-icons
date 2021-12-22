import React, { forwardRef } from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const BrightnessAltLowFill = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="brightness-alt-low-fill" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M8.5 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm5 6a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 11a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm10.243-3.536a.5.5 0 1 1-.707-.707.5.5 0 0 1 .707.707zm-8.486-.707a.5.5 0 1 0 .707.707.5.5 0 0 0-.707-.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z"/>
</svg>
    </IconBase>
  );
});

BrightnessAltLowFill.displayName = 'BrightnessAltLowFill';

export default BrightnessAltLowFill;  

import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Highlights = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="highlights" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0Zm-8 5v1H4.5a.502.502 0 0 0-.093.009A7.029 7.029 0 0 1 3.1 13H8Zm0-1v-1H1.674c.166.35.36.685.58 1H8Zm-6.71-2H8V9H1.07c.05.342.123.676.22 1ZM1 8h7V7H1.07c-.046.327-.07.66-.07 1Zm.29-2H8V5H1.674c-.153.32-.281.655-.384 1Zm.965-2H8V3H3.101c-.312.306-.596.64-.846 1Zm2.137-2H8V1c-1.32 0-2.554.365-3.608 1Z"/>
</svg>
    </IconBase>
  );
});

Highlights.displayName = 'Highlights';

export default Highlights;  

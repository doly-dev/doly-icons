import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const Shadows = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="shadows" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Zm-8 7a.5.5 0 0 1 0-1h3.5c.032 0 .063.003.093.009A7.032 7.032 0 0 0 12.9 13H8a.5.5 0 0 1 0-1h5.745c.22-.315.415-.65.581-1H8a.5.5 0 0 1 0-1h6.71a7.03 7.03 0 0 0 .22-1H8a.5.5 0 0 1 0-1h7c0-.34-.024-.673-.07-1H8a.5.5 0 0 1 0-1h6.71a6.949 6.949 0 0 0-.384-1H8a.5.5 0 0 1 0-1h5.745a7.035 7.035 0 0 0-.846-1H8a.5.5 0 0 1 0-1h3.608A7 7 0 1 0 8 15Z"/>
</svg>
    </IconBase>
  );
});

Shadows.displayName = 'Shadows';

export default Shadows;  

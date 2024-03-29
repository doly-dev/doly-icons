import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const TypeH4 = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="type-h4" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path d="M13.007 3H15v10h-1.29v-2.051H8.854v-1.18C10.1 7.513 11.586 5.256 13.007 3m-2.82 6.777h3.524v-5.62h-.074a95 95 0 0 0-3.45 5.554zM7.495 13V3.201H6.174v4.15H1.32V3.2H0V13h1.32V8.513h4.854V13z"/>
</svg>
    </IconBase>
  );
});

TypeH4.displayName = 'TypeH4';

export default TypeH4;  

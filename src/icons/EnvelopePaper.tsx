import React, { forwardRef } from 'react';
import type { IconBaseProps } from '../icon/IconBase';
import IconBase from '../icon/IconBase';

const EnvelopePaper = forwardRef<HTMLSpanElement, IconBaseProps>(({ svgProps, ...restProps }, ref) => {
  return (
    <IconBase aria-label="envelope-paper" {...restProps} ref={ref}>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...svgProps}>
  <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267v2.55l1-.6V5.4a1 1 0 0 0-.53-.882L14 4.267Zm-1 3.15V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v5.417l3.75 2.25L8 8.917l1.25.75L13 7.417Zm-11-.6v-2.55l-.47.25A1 1 0 0 0 1 5.4v.817l1 .6Zm13 .566-4.778 2.867L15 13.117V7.383Zm-.035 6.88L8 10.082l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738ZM1 13.116l4.778-2.867L1 7.383v5.734Z"/>
</svg>
    </IconBase>
  );
});

EnvelopePaper.displayName = 'EnvelopePaper';

export default EnvelopePaper;  

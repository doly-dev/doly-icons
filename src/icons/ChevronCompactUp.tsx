import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ChevronCompactUp: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-compact-up"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z"/>
</svg>
      )}
    />
  );

export default ChevronCompactUp;

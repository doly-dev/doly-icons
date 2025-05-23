import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ChevronCompactDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-compact-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
</svg>
      )}
    />
  );

export default ChevronCompactDown;

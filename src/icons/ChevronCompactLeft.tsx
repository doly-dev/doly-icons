import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ChevronCompactLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-compact-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
</svg>
      )}
    />
  );

export default ChevronCompactLeft;

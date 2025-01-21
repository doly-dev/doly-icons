import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ChevronLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default ChevronLeft;

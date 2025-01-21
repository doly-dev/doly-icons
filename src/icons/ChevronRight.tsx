import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ChevronRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg>
      )}
    />
  );

export default ChevronRight;

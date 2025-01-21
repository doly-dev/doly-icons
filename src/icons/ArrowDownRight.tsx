import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ArrowDownRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"/>
</svg>
      )}
    />
  );

export default ArrowDownRight;

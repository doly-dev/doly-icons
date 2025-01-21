import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ChevronCompactRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="chevron-compact-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671"/>
</svg>
      )}
    />
  );

export default ChevronCompactRight;

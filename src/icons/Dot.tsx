import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Dot: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dot"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
</svg>
      )}
    />
  );

export default Dot;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const CaretDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659"/>
</svg>
      )}
    />
  );

export default CaretDown;

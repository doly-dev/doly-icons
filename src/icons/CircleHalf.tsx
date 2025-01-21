import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const CircleHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="circle-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"/>
</svg>
      )}
    />
  );

export default CircleHalf;

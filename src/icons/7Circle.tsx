import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Icon7Circle: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="7-circle"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"/>
</svg>
      )}
    />
  );

export default Icon7Circle;

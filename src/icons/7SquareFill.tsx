import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Icon7SquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="7-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"/>
</svg>
      )}
    />
  );

export default Icon7SquareFill;

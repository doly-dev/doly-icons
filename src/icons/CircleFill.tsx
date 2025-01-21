import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <circle cx="8" cy="8" r="8"/>
</svg>
      )}
    />
  );

export default CircleFill;

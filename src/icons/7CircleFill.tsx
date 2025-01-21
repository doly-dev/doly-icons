import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Icon7CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="7-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.37 5.11h3.972v.07L6.025 12H7.42l3.258-6.85V4.002H5.369v1.107Z"/>
</svg>
      )}
    />
  );

export default Icon7CircleFill;

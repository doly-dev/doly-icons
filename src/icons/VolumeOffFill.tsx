import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const VolumeOffFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="volume-off-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M10.717 3.55A.5.5 0 0 1 11 4v8a.5.5 0 0 1-.812.39L7.825 10.5H5.5A.5.5 0 0 1 5 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06"/>
</svg>
      )}
    />
  );

export default VolumeOffFill;

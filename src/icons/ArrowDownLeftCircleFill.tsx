import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ArrowDownLeftCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-left-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768z"/>
</svg>
      )}
    />
  );

export default ArrowDownLeftCircleFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ArrowUpRightCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-up-right-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z"/>
</svg>
      )}
    />
  );

export default ArrowUpRightCircleFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const DashCircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dash-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default DashCircleFill;

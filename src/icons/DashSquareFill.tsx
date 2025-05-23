import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const DashSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dash-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1"/>
</svg>
      )}
    />
  );

export default DashSquareFill;

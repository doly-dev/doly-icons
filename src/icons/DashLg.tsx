import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const DashLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="dash-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/>
</svg>
      )}
    />
  );

export default DashLg;

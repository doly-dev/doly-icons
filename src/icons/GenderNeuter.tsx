import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const GenderNeuter: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="gender-neuter"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8M3 5a5 5 0 1 1 5.5 4.975V15.5a.5.5 0 0 1-1 0V9.975A5 5 0 0 1 3 5"/>
</svg>
      )}
    />
  );

export default GenderNeuter;

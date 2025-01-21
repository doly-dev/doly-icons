import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const PersonFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
      )}
    />
  );

export default PersonFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ExclamationLg: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation-lg"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0"/>
</svg>
      )}
    />
  );

export default ExclamationLg;

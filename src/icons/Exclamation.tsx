import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Exclamation: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.553.553 0 0 1-1.1 0z"/>
</svg>
      )}
    />
  );

export default Exclamation;

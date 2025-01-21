import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Slash: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="slash"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg>
      )}
    />
  );

export default Slash;

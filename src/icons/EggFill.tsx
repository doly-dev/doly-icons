import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const EggFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="egg-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14 10a6 6 0 0 1-12 0C2 5.686 5 0 8 0s6 5.686 6 10"/>
</svg>
      )}
    />
  );

export default EggFill;

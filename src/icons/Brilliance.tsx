import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Brilliance: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="brilliance"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16M1 8a7 7 0 0 0 7 7 3.5 3.5 0 1 0 0-7 3.5 3.5 0 1 1 0-7 7 7 0 0 0-7 7"/>
</svg>
      )}
    />
  );

export default Brilliance;

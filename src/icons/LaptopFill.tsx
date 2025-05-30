import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const LaptopFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="laptop-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 2A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5"/>
</svg>
      )}
    />
  );

export default LaptopFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const CaretDownFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-down-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>
      )}
    />
  );

export default CaretDownFill;

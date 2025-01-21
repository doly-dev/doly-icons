import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const HeartbreakFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heartbreak-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77"/>
</svg>
      )}
    />
  );

export default HeartbreakFill;

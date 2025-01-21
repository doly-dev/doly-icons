import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const HeartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="heart-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
      )}
    />
  );

export default HeartFill;

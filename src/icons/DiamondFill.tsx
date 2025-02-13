import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const DiamondFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="diamond-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098z"/>
</svg>
      )}
    />
  );

export default DiamondFill;

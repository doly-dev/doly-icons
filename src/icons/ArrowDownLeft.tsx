import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const ArrowDownLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrow-down-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 13.5a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1H3.707L13.854 2.854a.5.5 0 0 0-.708-.708L3 12.293V7.5a.5.5 0 0 0-1 0z"/>
</svg>
      )}
    />
  );

export default ArrowDownLeft;

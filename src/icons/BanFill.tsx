import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const BanFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="ban-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M2.71 12.584q.328.378.706.707l9.875-9.875a7 7 0 0 0-.707-.707l-9.875 9.875Z"/>
</svg>
      )}
    />
  );

export default BanFill;

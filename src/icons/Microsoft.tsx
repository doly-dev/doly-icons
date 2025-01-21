import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Microsoft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="microsoft"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M7.462 0H0v7.19h7.462zM16 0H8.538v7.19H16zM7.462 8.211H0V16h7.462zm8.538 0H8.538V16H16z"/>
</svg>
      )}
    />
  );

export default Microsoft;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const SkipStartFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="skip-start-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.54-.313 1.232.066 1.232.696v7.384c0 .63-.692 1.01-1.232.697L5 8.753V12a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default SkipStartFill;

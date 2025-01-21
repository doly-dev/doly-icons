import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const MagnetFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="magnet-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15 12h-4v3h4zM5 12H1v3h4zM0 8a8 8 0 1 1 16 0v8h-6V8a2 2 0 1 0-4 0v8H0z"/>
</svg>
      )}
    />
  );

export default MagnetFill;

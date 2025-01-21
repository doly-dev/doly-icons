import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Easel3Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="easel3-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1z"/>
</svg>
      )}
    />
  );

export default Easel3Fill;

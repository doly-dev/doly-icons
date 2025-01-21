import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const Icon1CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="1-circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M9.283 4.002H7.971L6.072 5.385v1.271l1.834-1.318h.065V12h1.312z"/>
</svg>
      )}
    />
  );

export default Icon1CircleFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const CaretLeftFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="caret-left-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
</svg>
      )}
    />
  );

export default CaretLeftFill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![circle-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8Y2lyY2xlIGN4PSI4IiBjeT0iOCIgcj0iOCIvPgo8L3N2Zz4=)*/
const CircleFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="circle-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <circle cx="8" cy="8" r="8"/>
</svg>
      )}
    />
  );

export default CircleFill;

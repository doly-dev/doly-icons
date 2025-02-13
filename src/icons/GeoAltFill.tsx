import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const GeoAltFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="geo-alt-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
      )}
    />
  );

export default GeoAltFill;

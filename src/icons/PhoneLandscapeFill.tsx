import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const PhoneLandscapeFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="phone-landscape-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 12.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm11-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2"/>
</svg>
      )}
    />
  );

export default PhoneLandscapeFill;

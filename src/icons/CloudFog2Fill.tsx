import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const CloudFog2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-fog2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 3a5 5 0 0 1 4.905 4.027A3 3 0 0 1 13 13h-1.5a.5.5 0 0 0 0-1H1.05a3.5 3.5 0 0 1-.713-1H9.5a.5.5 0 0 0 0-1H.035a3.5 3.5 0 0 1 0-1H7.5a.5.5 0 0 0 0-1H.337a3.5 3.5 0 0 1 3.57-1.977A5 5 0 0 1 8.5 3"/>
</svg>
      )}
    />
  );

export default CloudFog2Fill;

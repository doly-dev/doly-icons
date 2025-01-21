import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const StackOverflow: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stack-overflow"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12.412 14.572V10.29h1.428V16H1v-5.71h1.428v4.282z"/>
  <path d="M3.857 13.145h7.137v-1.428H3.857zM10.254 0 9.108.852l4.26 5.727 1.146-.852zm-3.54 3.377 5.484 4.567.913-1.097L7.627 2.28l-.914 1.097zM4.922 6.55l6.47 3.013.603-1.294-6.47-3.013zm-.925 3.344 6.985 1.469.294-1.398-6.985-1.468z"/>
</svg>
      )}
    />
  );

export default StackOverflow;

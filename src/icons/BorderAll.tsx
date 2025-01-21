import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const BorderAll: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="border-all"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 0h16v16H0zm1 1v6.5h6.5V1zm7.5 0v6.5H15V1zM15 8.5H8.5V15H15zM7.5 15V8.5H1V15z"/>
</svg>
      )}
    />
  );

export default BorderAll;

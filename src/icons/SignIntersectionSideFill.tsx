import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const SignIntersectionSideFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-intersection-side-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM6.25 4h1.5v3.25H11v1.5H7.75V12h-1.5z"/>
</svg>
      )}
    />
  );

export default SignIntersectionSideFill;

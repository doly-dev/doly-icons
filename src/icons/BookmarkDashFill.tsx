import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

const BookmarkDashFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-dash-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M6 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default BookmarkDashFill;

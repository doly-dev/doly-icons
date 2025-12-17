import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![reply-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNS45MjEgMTEuOSAxLjM1MyA4LjYyYS43Mi43MiAwIDAgMSAwLTEuMjM4TDUuOTIxIDQuMUEuNzE2LjcxNiAwIDAgMSA3IDQuNzE5VjZjMS41IDAgNiAwIDcgOC0yLjUtNC41LTctNC03LTR2MS4yODFjMCAuNTYtLjYwNi44OTgtMS4wNzkuNjJ6Ii8+Cjwvc3ZnPg==)*/
const ReplyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="reply-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"/>
</svg>
      )}
    />
  );

export default ReplyFill;

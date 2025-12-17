import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-up-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjM2NCAzLjVhLjUuNSAwIDAgMSAuNS0uNUgxNC41QTEuNSAxLjUgMCAwIDEgMTYgNC41djEwYTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtMTBBMS41IDEuNSAwIDAgMSAzIDE0LjVWNy44NjRhLjUuNSAwIDEgMSAxIDBWMTQuNWEuNS41IDAgMCAwIC41LjVoMTBhLjUuNSAwIDAgMCAuNS0uNXYtMTBhLjUuNSAwIDAgMC0uNS0uNUg3Ljg2NGEuNS41IDAgMCAxLS41LS41Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAuNUEuNS41IDAgMCAxIC41IDBoNWEuNS41IDAgMCAxIDAgMUgxLjcwN2w4LjE0NyA4LjE0NmEuNS41IDAgMCAxLS43MDguNzA4TDEgMS43MDdWNS41YS41LjUgMCAwIDEtMSAweiIvPgo8L3N2Zz4=)*/
const BoxArrowUpLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-up-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5"/>
  <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0z"/>
</svg>
      )}
    />
  );

export default BoxArrowUpLeft;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-in-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zLjUgNmEuNS41IDAgMCAwLS41LjV2OGEuNS41IDAgMCAwIC41LjVoOWEuNS41IDAgMCAwIC41LS41di04YS41LjUgMCAwIDAtLjUtLjVoLTJhLjUuNSAwIDAgMSAwLTFoMkExLjUgMS41IDAgMCAxIDE0IDYuNXY4YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtOUExLjUgMS41IDAgMCAxIDIgMTQuNXYtOEExLjUgMS41IDAgMCAxIDMuNSA1aDJhLjUuNSAwIDAgMSAwIDF6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNy42NDYgMTEuODU0YS41LjUgMCAwIDAgLjcwOCAwbDMtM2EuNS41IDAgMCAwLS43MDgtLjcwOEw4LjUgMTAuMjkzVjEuNWEuNS41IDAgMCAwLTEgMHY4Ljc5M0w1LjM1NCA4LjE0NmEuNS41IDAgMSAwLS43MDguNzA4eiIvPgo8L3N2Zz4=)*/
const BoxArrowInDown: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-in-down"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1z"/>
  <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z"/>
</svg>
      )}
    />
  );

export default BoxArrowInDown;

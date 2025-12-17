import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![sign-turn-right](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSA4LjVBMi41IDIuNSAwIDAgMSA3LjUgNkg5VjQuNTM0YS4yNS4yNSAwIDAgMSAuNDEtLjE5MmwyLjM2IDEuOTY2Yy4xMi4xLjEyLjI4NCAwIC4zODRMOS40MSA4LjY1OEEuMjUuMjUgMCAwIDEgOSA4LjQ2NlY3SDcuNUExLjUgMS41IDAgMCAwIDYgOC41VjExSDV6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNi45NS40MzVjLjU4LS41OCAxLjUyLS41OCAyLjEgMGw2LjUxNSA2LjUxNmMuNTguNTguNTggMS41MTkgMCAyLjA5OEw5LjA1IDE1LjU2NWMtLjU4LjU4LTEuNTE5LjU4LTIuMDk4IDBMLjQzNSA5LjA1YTEuNDggMS40OCAwIDAgMSAwLTIuMDk4em0xLjQuN2EuNDk1LjQ5NSAwIDAgMC0uNyAwTDEuMTM0IDcuNjVhLjQ5NS40OTUgMCAwIDAgMCAuN2w2LjUxNiA2LjUxNmEuNDk1LjQ5NSAwIDAgMCAuNyAwbDYuNTE2LTYuNTE2YS40OTUuNDk1IDAgMCAwIDAtLjdMOC4zNSAxLjEzNFoiLz4KPC9zdmc+)*/
const SignTurnRight: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="sign-turn-right"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 8.5A2.5 2.5 0 0 1 7.5 6H9V4.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L9.41 8.658A.25.25 0 0 1 9 8.466V7H7.5A1.5 1.5 0 0 0 6 8.5V11H5z"/>
  <path fillRule="evenodd" d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134Z"/>
</svg>
      )}
    />
  );

export default SignTurnRight;

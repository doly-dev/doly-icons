import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclamation-diamond](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi45NS40MzVjLjU4LS41OCAxLjUyLS41OCAyLjEgMGw2LjUxNSA2LjUxNmMuNTguNTguNTggMS41MTkgMCAyLjA5OEw5LjA1IDE1LjU2NWMtLjU4LjU4LTEuNTE5LjU4LTIuMDk4IDBMLjQzNSA5LjA1YTEuNDggMS40OCAwIDAgMSAwLTIuMDk4em0xLjQuN2EuNDk1LjQ5NSAwIDAgMC0uNyAwTDEuMTM0IDcuNjVhLjQ5NS40OTUgMCAwIDAgMCAuN2w2LjUxNiA2LjUxNmEuNDk1LjQ5NSAwIDAgMCAuNyAwbDYuNTE2LTYuNTE2YS40OTUuNDk1IDAgMCAwIDAtLjdMOC4zNSAxLjEzNHoiLz4KICA8cGF0aCBkPSJNNy4wMDIgMTFhMSAxIDAgMSAxIDIgMCAxIDEgMCAwIDEtMiAwTTcuMSA0Ljk5NWEuOTA1LjkwNSAwIDEgMSAxLjggMGwtLjM1IDMuNTA3YS41NTIuNTUyIDAgMCAxLTEuMSAweiIvPgo8L3N2Zz4=)*/
const ExclamationDiamond: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation-diamond"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z"/>
  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
</svg>
      )}
    />
  );

export default ExclamationDiamond;

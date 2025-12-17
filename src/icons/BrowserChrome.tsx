import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![browser-chrome](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiA4YTggOCAwIDAgMS03LjAyMiA3Ljk0bDEuOTAyLTcuMDk4YTMgMyAwIDAgMCAuMDUtMS40OTJBMyAzIDAgMCAwIDEwLjIzNyA2aDUuNTExQTggOCAwIDAgMSAxNiA4TTAgOGE4IDggMCAwIDAgNy45MjcgOGwxLjQyNi01LjMyMWEzIDMgMCAwIDEtLjcyMy4yNTUgMyAzIDAgMCAxLTEuNzQzLS4xNDcgMyAzIDAgMCAxLTEuMDQzLS43TC42MzMgNC44NzZBOCA4IDAgMCAwIDAgOG01LjAwNC0uMTY3TDEuMTA4IDMuOTM2QTguMDAzIDguMDAzIDAgMCAxIDE1LjQxOCA1SDguMDY2YTMgMyAwIDAgMC0xLjI1Mi4yNDMgMi45OSAyLjk5IDAgMCAwLTEuODEgMi41OU04IDEwYTIgMiAwIDEgMCAwLTQgMiAyIDAgMCAwIDAgNCIvPgo8L3N2Zz4=)*/
const BrowserChrome: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="browser-chrome"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M16 8a8 8 0 0 1-7.022 7.94l1.902-7.098a3 3 0 0 0 .05-1.492A3 3 0 0 0 10.237 6h5.511A8 8 0 0 1 16 8M0 8a8 8 0 0 0 7.927 8l1.426-5.321a3 3 0 0 1-.723.255 3 3 0 0 1-1.743-.147 3 3 0 0 1-1.043-.7L.633 4.876A8 8 0 0 0 0 8m5.004-.167L1.108 3.936A8.003 8.003 0 0 1 15.418 5H8.066a3 3 0 0 0-1.252.243 2.99 2.99 0 0 0-1.81 2.59M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
</svg>
      )}
    />
  );

export default BrowserChrome;

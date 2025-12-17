import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bag-check](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC44NTQgOC4xNDZhLjUuNSAwIDAgMSAwIC43MDhsLTMgM2EuNS41IDAgMCAxLS43MDggMGwtMS41LTEuNWEuNS41IDAgMCAxIC43MDgtLjcwOEw3LjUgMTAuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwIDEgLjcwOCAwIi8+CiAgPHBhdGggZD0iTTggMWEyLjUgMi41IDAgMCAxIDIuNSAyLjVWNGgtNXYtLjVBMi41IDIuNSAwIDAgMSA4IDFtMy41IDN2LS41YTMuNSAzLjUgMCAxIDAtNyAwVjRIMXYxMGEyIDIgMCAwIDAgMiAyaDEwYTIgMiAwIDAgMCAyLTJWNHpNMiA1aDEydjlhMSAxIDAgMCAxLTEgMUgzYTEgMSAwIDAgMS0xLTF6Ii8+Cjwvc3ZnPg==)*/
const BagCheck: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bag-check"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default BagCheck;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![grid-3x2-gap](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCA0djJIMlY0em0xIDdWOWExIDEgMCAwIDAtMS0xSDJhMSAxIDAgMCAwLTEgMXYyYTEgMSAwIDAgMCAxIDFoMmExIDEgMCAwIDAgMS0xbTAtNVY0YTEgMSAwIDAgMC0xLTFIMmExIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMWgyYTEgMSAwIDAgMCAxLTFtNSA1VjlhMSAxIDAgMCAwLTEtMUg3YTEgMSAwIDAgMC0xIDF2MmExIDEgMCAwIDAgMSAxaDJhMSAxIDAgMCAwIDEtMW0wLTVWNGExIDEgMCAwIDAtMS0xSDdhMSAxIDAgMCAwLTEgMXYyYTEgMSAwIDAgMCAxIDFoMmExIDEgMCAwIDAgMS0xTTkgNHYySDdWNHptNSAwaC0ydjJoMnpNNCA5djJIMlY5em01IDB2Mkg3Vjl6bTUgMHYyaC0yVjl6bS0zLTVhMSAxIDAgMCAxIDEtMWgyYTEgMSAwIDAgMSAxIDF2MmExIDEgMCAwIDEtMSAxaC0yYTEgMSAwIDAgMS0xLTF6bTEgNGExIDEgMCAwIDAtMSAxdjJhMSAxIDAgMCAwIDEgMWgyYTEgMSAwIDAgMCAxLTFWOWExIDEgMCAwIDAtMS0xeiIvPgo8L3N2Zz4=)*/
const Grid3x2Gap: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="grid-3x2-gap"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 4v2H2V4zm1 7V9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m5 5V9a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1m0-5V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M9 4v2H7V4zm5 0h-2v2h2zM4 9v2H2V9zm5 0v2H7V9zm5 0v2h-2V9zm-3-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default Grid3x2Gap;

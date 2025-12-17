import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![passport](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA1YTMgMyAwIDEgMCAwIDYgMyAzIDAgMCAwIDAtNk02IDhhMiAyIDAgMSAxIDQgMCAyIDIgMCAwIDEtNCAwbS0uNSA0YS41LjUgMCAwIDAgMCAxaDVhLjUuNSAwIDAgMCAwLTF6Ii8+CiAgPHBhdGggZD0iTTMuMjMyIDEuNzc2QTEuNSAxLjUgMCAwIDAgMiAzLjI1MnYxMC45NWMwIC40NDUuMTkxLjgzOC40OSAxLjExLjM2Ny40MjIuOTA4LjY4OCAxLjUxLjY4OGg4YTIgMiAwIDAgMCAyLTJWNGEyIDIgMCAwIDAtMS0xLjczMnYtLjQ3QTEuNSAxLjUgMCAwIDAgMTEuMjMyLjMyMWwtOCAxLjQ1NFpNNCAzaDhhMSAxIDAgMCAxIDEgMXYxMGExIDEgMCAwIDEtMSAxSDRhMSAxIDAgMCAxLTEtMVY0YTEgMSAwIDAgMSAxLTEiLz4KPC9zdmc+)*/
const Passport: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="passport"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6 8a2 2 0 1 1 4 0 2 2 0 0 1-4 0m-.5 4a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
  <path d="M3.232 1.776A1.5 1.5 0 0 0 2 3.252v10.95c0 .445.191.838.49 1.11.367.422.908.688 1.51.688h8a2 2 0 0 0 2-2V4a2 2 0 0 0-1-1.732v-.47A1.5 1.5 0 0 0 11.232.321l-8 1.454ZM4 3h8a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1"/>
</svg>
      )}
    />
  );

export default Passport;

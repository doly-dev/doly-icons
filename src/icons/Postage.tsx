import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![postage](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNC43NSAzYS43NS43NSAwIDAgMC0uNzUuNzV2OC41YzAgLjQxNC4zMzYuNzUuNzUuNzVoNi41YS43NS43NSAwIDAgMCAuNzUtLjc1di04LjVhLjc1Ljc1IDAgMCAwLS43NS0uNzV6TTExIDEySDVWNGg2eiIvPgogIDxwYXRoIGQ9Ik0zLjUgMWExIDEgMCAwIDAgMS0xaDFhMSAxIDAgMCAwIDIgMGgxYTEgMSAwIDAgMCAyIDBoMWExIDEgMCAxIDAgMiAwSDE1djFhMSAxIDAgMSAwIDAgMnYxYTEgMSAwIDEgMCAwIDJ2MWExIDEgMCAxIDAgMCAydjFhMSAxIDAgMSAwIDAgMnYxYTEgMSAwIDEgMCAwIDJ2MWgtMS41YTEgMSAwIDEgMC0yIDBoLTFhMSAxIDAgMSAwLTIgMGgtMWExIDEgMCAxIDAtMiAwaC0xYTEgMSAwIDEgMC0yIDBIMXYtMWExIDEgMCAxIDAgMC0ydi0xYTEgMSAwIDEgMCAwLTJWOWExIDEgMCAxIDAgMC0yVjZhMSAxIDAgMCAwIDAtMlYzYTEgMSAwIDAgMCAwLTJWMGgxLjVhMSAxIDAgMCAwIDEgMU0zIDN2MTBhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTFWM2ExIDEgMCAwIDAtMS0xSDRhMSAxIDAgMCAwLTEgMSIvPgo8L3N2Zz4=)*/
const Postage: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="postage"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4.75 3a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 .75-.75v-8.5a.75.75 0 0 0-.75-.75zM11 12H5V4h6z"/>
  <path d="M3.5 1a1 1 0 0 0 1-1h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 1 0 2 0H15v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1h-1.5a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0H1v-1a1 1 0 1 0 0-2v-1a1 1 0 1 0 0-2V9a1 1 0 1 0 0-2V6a1 1 0 0 0 0-2V3a1 1 0 0 0 0-2V0h1.5a1 1 0 0 0 1 1M3 3v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1"/>
</svg>
      )}
    />
  );

export default Postage;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![postage-heart](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMy41IDFhMSAxIDAgMCAwIDEtMWgxYTEgMSAwIDAgMCAyIDBoMWExIDEgMCAwIDAgMiAwaDFhMSAxIDAgMSAwIDIgMEgxNXYxYTEgMSAwIDEgMCAwIDJ2MWExIDEgMCAxIDAgMCAydjFhMSAxIDAgMSAwIDAgMnYxYTEgMSAwIDEgMCAwIDJ2MWExIDEgMCAxIDAgMCAydjFoLTEuNWExIDEgMCAxIDAtMiAwaC0xYTEgMSAwIDEgMC0yIDBoLTFhMSAxIDAgMSAwLTIgMGgtMWExIDEgMCAxIDAtMiAwSDF2LTFhMSAxIDAgMSAwIDAtMnYtMWExIDEgMCAxIDAgMC0yVjlhMSAxIDAgMSAwIDAtMlY2YTEgMSAwIDAgMCAwLTJWM2ExIDEgMCAwIDAgMC0yVjBoMS41YTEgMSAwIDAgMCAxIDFNMyAzdjEwYTEgMSAwIDAgMCAxIDFoOGExIDEgMCAwIDAgMS0xVjNhMSAxIDAgMCAwLTEtMUg0YTEgMSAwIDAgMC0xIDEiLz4KICA8cGF0aCBkPSJNOCAxMUMyLjE3NSA3LjIzNiA2LjMzNiA0LjMxIDggNS45ODIgOS42NjQgNC4zMDkgMTMuODI1IDcuMjM2IDggMTEiLz4KPC9zdmc+)*/
const PostageHeart: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="postage-heart"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M3.5 1a1 1 0 0 0 1-1h1a1 1 0 0 0 2 0h1a1 1 0 0 0 2 0h1a1 1 0 1 0 2 0H15v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1a1 1 0 1 0 0 2v1h-1.5a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0h-1a1 1 0 1 0-2 0H1v-1a1 1 0 1 0 0-2v-1a1 1 0 1 0 0-2V9a1 1 0 1 0 0-2V6a1 1 0 0 0 0-2V3a1 1 0 0 0 0-2V0h1.5a1 1 0 0 0 1 1M3 3v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1"/>
  <path d="M8 11C2.175 7.236 6.336 4.31 8 5.982 9.664 4.309 13.825 7.236 8 11"/>
</svg>
      )}
    />
  );

export default PostageHeart;

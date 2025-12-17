import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![headphones](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAzYTUgNSAwIDAgMC01IDV2MWgxYTEgMSAwIDAgMSAxIDF2M2ExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMVY4YTYgNiAwIDEgMSAxMiAwdjVhMSAxIDAgMCAxLTEgMWgtMWExIDEgMCAwIDEtMS0xdi0zYTEgMSAwIDAgMSAxLTFoMVY4YTUgNSAwIDAgMC01LTUiLz4KPC9zdmc+)*/
const Headphones: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="headphones"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5"/>
</svg>
      )}
    />
  );

export default Headphones;

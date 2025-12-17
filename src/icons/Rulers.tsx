import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![rulers](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMSAwYTEgMSAwIDAgMC0xIDF2MTRhMSAxIDAgMCAwIDEgMWg1di0xSDJ2LTFoNHYtMUg0di0xaDJ2LTFIMnYtMWg0VjlINFY4aDJWN0gyVjZoNFYyaDF2NGgxVjRoMXYyaDFWMmgxdjRoMVY0aDF2MmgxVjJoMXY0aDFWMWExIDEgMCAwIDAtMS0xeiIvPgo8L3N2Zz4=)*/
const Rulers: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="rulers"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default Rulers;

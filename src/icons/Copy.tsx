import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![copy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDJhMiAyIDAgMCAxIDItMmg4YTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAySDZhMiAyIDAgMCAxLTItMnptMi0xYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTF6TTIgNWExIDEgMCAwIDAtMSAxdjhhMSAxIDAgMCAwIDEgMWg4YTEgMSAwIDAgMCAxLTF2LTFoMXYxYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjZhMiAyIDAgMCAxIDItMmgxdjF6Ii8+Cjwvc3ZnPg==)*/
const Copy: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="copy"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/>
</svg>
      )}
    />
  );

export default Copy;

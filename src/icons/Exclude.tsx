import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclude](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMCAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjJoMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkg2YTIgMiAwIDAgMS0yLTJ2LTJIMmEyIDIgMCAwIDEtMi0yem0xMiAySDVhMSAxIDAgMCAwLTEgMXY3aDdhMSAxIDAgMCAwIDEtMXoiLz4KPC9zdmc+)*/
const Exclude: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclude"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2zm12 2H5a1 1 0 0 0-1 1v7h7a1 1 0 0 0 1-1z"/>
</svg>
      )}
    />
  );

export default Exclude;

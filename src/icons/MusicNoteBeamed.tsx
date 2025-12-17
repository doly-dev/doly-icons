import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![music-note-beamed](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiAxM2MwIDEuMTA1LTEuMTIgMi0yLjUgMlMxIDE0LjEwNSAxIDEzczEuMTItMiAyLjUtMiAyLjUuODk2IDIuNSAybTktMmMwIDEuMTA1LTEuMTIgMi0yLjUgMnMtMi41LS44OTUtMi41LTIgMS4xMi0yIDIuNS0yIDIuNS44OTUgMi41IDIiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCAxMVYyaDF2OXpNNiAzdjEwSDVWM3oiLz4KICA8cGF0aCBkPSJNNSAyLjkwNWExIDEgMCAwIDEgLjktLjk5NWw4LS44YTEgMSAwIDAgMSAxLjEuOTk1VjNMNSA0eiIvPgo8L3N2Zz4=)*/
const MusicNoteBeamed: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="music-note-beamed"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13s1.12-2 2.5-2 2.5.896 2.5 2m9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2"/>
  <path fillRule="evenodd" d="M14 11V2h1v9zM6 3v10H5V3z"/>
  <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4z"/>
</svg>
      )}
    />
  );

export default MusicNoteBeamed;

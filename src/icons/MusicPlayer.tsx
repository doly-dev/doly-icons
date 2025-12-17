import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![music-player](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAzYTEgMSAwIDAgMSAxLTFoNmExIDEgMCAwIDEgMSAxdjNhMSAxIDAgMCAxLTEgMUg1YTEgMSAwIDAgMS0xLTF6bTEgMHYzaDZWM3ptMyA5YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMiIvPgogIDxwYXRoIGQ9Ik0xMSAxMWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDBtLTMgMmEyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDQiLz4KICA8cGF0aCBkPSJNMiAyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0yem0yLTFhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==)*/
const MusicPlayer: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="music-player"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm1 0v3h6V3zm3 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path d="M11 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default MusicPlayer;

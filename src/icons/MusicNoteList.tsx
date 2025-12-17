import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![music-note-list](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTIgMTNjMCAxLjEwNS0xLjEyIDItMi41IDJTNyAxNC4xMDUgNyAxM3MxLjEyLTIgMi41LTIgMi41Ljg5NSAyLjUgMiIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDN2MTBoLTFWM3oiLz4KICA8cGF0aCBkPSJNMTEgMi44MmExIDEgMCAwIDEgLjgwNC0uOThsMy0uNkExIDEgMCAwIDEgMTYgMi4yMlY0bC01IDF6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMCAxMS41YS41LjUgMCAwIDEgLjUtLjVINGEuNS41IDAgMCAxIDAgMUguNWEuNS41IDAgMCAxLS41LS41bTAtNEEuNS41IDAgMCAxIC41IDdIOGEuNS41IDAgMCAxIDAgMUguNWEuNS41IDAgMCAxLS41LS41bTAtNEEuNS41IDAgMCAxIC41IDNIOGEuNS41IDAgMCAxIDAgMUguNWEuNS41IDAgMCAxLS41LS41Ii8+Cjwvc3ZnPg==)*/
const MusicNoteList: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="music-note-list"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M12 13c0 1.105-1.12 2-2.5 2S7 14.105 7 13s1.12-2 2.5-2 2.5.895 2.5 2"/>
  <path fillRule="evenodd" d="M12 3v10h-1V3z"/>
  <path d="M11 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 16 2.22V4l-5 1z"/>
  <path fillRule="evenodd" d="M0 11.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 7H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5m0-4A.5.5 0 0 1 .5 3H8a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5"/>
</svg>
      )}
    />
  );

export default MusicNoteList;

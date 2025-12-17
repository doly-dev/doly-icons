import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-surprise](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTcgNS41QzcgNi4zMjggNi41NTIgNyA2IDdzLTEtLjY3Mi0xLTEuNVM1LjQ0OCA0IDYgNHMxIC42NzIgMSAxLjVtNCAwYzAgLjgyOC0uNDQ4IDEuNS0xIDEuNXMtMS0uNjcyLTEtMS41UzkuNDQ4IDQgMTAgNHMxIC42NzIgMSAxLjVNMTAgMTFhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwIi8+Cjwvc3ZnPg==)*/
const EmojiSurprise: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-surprise"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M7 5.5C7 6.328 6.552 7 6 7s-1-.672-1-1.5S5.448 4 6 4s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 4 10 4s1 .672 1 1.5M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
      )}
    />
  );

export default EmojiSurprise;

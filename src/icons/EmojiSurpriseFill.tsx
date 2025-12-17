import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-surprise-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTYgOEE4IDggMCAxIDEgMCA4YTggOCAwIDAgMSAxNiAwTTcgNS41QzcgNC42NzIgNi41NTIgNCA2IDRzLTEgLjY3Mi0xIDEuNVM1LjQ0OCA3IDYgN3MxLS42NzIgMS0xLjVtNCAwYzAtLjgyOC0uNDQ4LTEuNS0xLTEuNXMtMSAuNjcyLTEgMS41UzkuNDQ4IDcgMTAgN3MxLS42NzIgMS0xLjVNOCAxM2EyIDIgMCAxIDAgMC00IDIgMiAwIDAgMCAwIDQiLz4KPC9zdmc+)*/
const EmojiSurpriseFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-surprise-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M7 5.5C7 4.672 6.552 4 6 4s-1 .672-1 1.5S5.448 7 6 7s1-.672 1-1.5m4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 7 10 7s1-.672 1-1.5M8 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
</svg>
      )}
    />
  );

export default EmojiSurpriseFill;

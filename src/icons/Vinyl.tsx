import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![vinyl](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTggNmEyIDIgMCAxIDAgMCA0IDIgMiAwIDAgMCAwLTRNNCA4YTQgNCAwIDEgMSA4IDAgNCA0IDAgMCAxLTggMCIvPgogIDxwYXRoIGQ9Ik05IDhhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwIi8+Cjwvc3ZnPg==)*/
const Vinyl: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="vinyl"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0"/>
  <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
</svg>
      )}
    />
  );

export default Vinyl;

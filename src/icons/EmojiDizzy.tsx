import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-dizzy](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNUE3IDcgMCAxIDEgOCAxYTcgNyAwIDAgMSAwIDE0bTAgMUE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2Ii8+CiAgPHBhdGggZD0iTTkuMTQ2IDUuMTQ2YS41LjUgMCAwIDEgLjcwOCAwbC42NDYuNjQ3LjY0Ni0uNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLS42NDcuNjQ2LjY0Ny42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtLjY0Ni0uNjQ3LS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4bC42NDctLjY0Ni0uNjQ3LS42NDZhLjUuNSAwIDAgMSAwLS43MDhtLTUgMGEuNS41IDAgMCAxIC43MDggMGwuNjQ2LjY0Ny42NDYtLjY0N2EuNS41IDAgMSAxIC43MDguNzA4bC0uNjQ3LjY0Ni42NDcuNjQ2YS41LjUgMCAxIDEtLjcwOC43MDhMNS41IDcuMjA3bC0uNjQ2LjY0N2EuNS41IDAgMSAxLS43MDgtLjcwOGwuNjQ3LS42NDYtLjY0Ny0uNjQ2YS41LjUgMCAwIDEgMC0uNzA4TTEwIDExYTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMCIvPgo8L3N2Zz4=)*/
const EmojiDizzy: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-dizzy"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M9.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708m-5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M10 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
      )}
    />
  );

export default EmojiDizzy;

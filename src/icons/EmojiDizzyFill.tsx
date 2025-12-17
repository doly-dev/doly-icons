import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![emoji-dizzy-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxNkE4IDggMCAxIDAgOCAwYTggOCAwIDAgMCAwIDE2TTQuMTQ2IDUuMTQ2YS41LjUgMCAwIDEgLjcwOCAwbC42NDYuNjQ3LjY0Ni0uNjQ3YS41LjUgMCAxIDEgLjcwOC43MDhsLS42NDcuNjQ2LjY0Ny42NDZhLjUuNSAwIDEgMS0uNzA4LjcwOEw1LjUgNy4yMDdsLS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4bC42NDctLjY0Ni0uNjQ3LS42NDZhLjUuNSAwIDAgMSAwLS43MDhtNSAwYS41LjUgMCAwIDEgLjcwOCAwbC42NDYuNjQ3LjY0Ni0uNjQ3YS41LjUgMCAwIDEgLjcwOC43MDhsLS42NDcuNjQ2LjY0Ny42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOGwtLjY0Ni0uNjQ3LS42NDYuNjQ3YS41LjUgMCAxIDEtLjcwOC0uNzA4bC42NDctLjY0Ni0uNjQ3LS42NDZhLjUuNSAwIDAgMSAwLS43MDhNOCAxM2EyIDIgMCAxIDEgMC00IDIgMiAwIDAgMSAwIDQiLz4KPC9zdmc+)*/
const EmojiDizzyFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="emoji-dizzy-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.146 5.146a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 1 1 .708.708l-.647.646.647.646a.5.5 0 1 1-.708.708L5.5 7.207l-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708m5 0a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708.708l-.647.646.647.646a.5.5 0 0 1-.708.708l-.646-.647-.646.647a.5.5 0 1 1-.708-.708l.647-.646-.647-.646a.5.5 0 0 1 0-.708M8 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4"/>
</svg>
      )}
    />
  );

export default EmojiDizzyFill;

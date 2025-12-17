import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![x-square-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMnptMy4zNTQgNC42NDZMOCA3LjI5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMCAxIC43MDguNzA4TDguNzA3IDhsMi42NDcgMi42NDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDguNzA3bC0yLjY0NiAyLjY0N2EuNS41IDAgMCAxLS43MDgtLjcwOEw3LjI5MyA4IDQuNjQ2IDUuMzU0YS41LjUgMCAxIDEgLjcwOC0uNzA4Ii8+Cjwvc3ZnPg==)*/
const XSquareFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="x-square-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
</svg>
      )}
    />
  );

export default XSquareFill;

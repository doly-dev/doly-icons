import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bookmark-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjE0NiA1LjE0NmEuNS41IDAgMCAxIC43MDggMEw4IDYuMjkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAxIDEgLjcwOC43MDhMOC43MDcgN2wxLjE0NyAxLjE0NmEuNS41IDAgMCAxLS43MDguNzA4TDggNy43MDcgNi44NTQgOC44NTRhLjUuNSAwIDEgMS0uNzA4LS43MDhMNy4yOTMgNyA2LjE0NiA1Ljg1NGEuNS41IDAgMCAxIDAtLjcwOCIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAxIDItMmg4YTIgMiAwIDAgMSAyIDJ2MTMuNWEuNS41IDAgMCAxLS43NzcuNDE2TDggMTMuMTAxbC01LjIyMyAyLjgxNUEuNS41IDAgMCAxIDIgMTUuNXptMi0xYTEgMSAwIDAgMC0xIDF2MTIuNTY2bDQuNzIzLTIuNDgyYS41LjUgMCAwIDEgLjU1NCAwTDEzIDE0LjU2NlYyYTEgMSAwIDAgMC0xLTF6Ii8+Cjwvc3ZnPg==)*/
const BookmarkX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bookmark-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.146 5.146a.5.5 0 0 1 .708 0L8 6.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 7l1.147 1.146a.5.5 0 0 1-.708.708L8 7.707 6.854 8.854a.5.5 0 1 1-.708-.708L7.293 7 6.146 5.854a.5.5 0 0 1 0-.708"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
</svg>
      )}
    />
  );

export default BookmarkX;

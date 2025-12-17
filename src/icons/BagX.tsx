import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![bag-x](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02LjE0NiA4LjE0NmEuNS41IDAgMCAxIC43MDggMEw4IDkuMjkzbDEuMTQ2LTEuMTQ3YS41LjUgMCAxIDEgLjcwOC43MDhMOC43MDcgMTBsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOEw4IDEwLjcwN2wtMS4xNDYgMS4xNDdhLjUuNSAwIDAgMS0uNzA4LS43MDhMNy4yOTMgMTAgNi4xNDYgOC44NTRhLjUuNSAwIDAgMSAwLS43MDgiLz4KICA8cGF0aCBkPSJNOCAxYTIuNSAyLjUgMCAwIDEgMi41IDIuNVY0aC01di0uNUEyLjUgMi41IDAgMCAxIDggMW0zLjUgM3YtLjVhMy41IDMuNSAwIDEgMC03IDBWNEgxdjEwYTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDItMlY0ek0yIDVoMTJ2OWExIDEgMCAwIDEtMSAxSDNhMSAxIDAgMCAxLTEtMXoiLz4KPC9zdmc+)*/
const BagX: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="bag-x"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg>
      )}
    />
  );

export default BagX;

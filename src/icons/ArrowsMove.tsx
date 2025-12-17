import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![arrows-move](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjY0Ni4xNDZhLjUuNSAwIDAgMSAuNzA4IDBsMiAyYS41LjUgMCAwIDEtLjcwOC43MDhMOC41IDEuNzA3VjUuNWEuNS41IDAgMCAxLTEgMFYxLjcwN0w2LjM1NCAyLjg1NGEuNS41IDAgMSAxLS43MDgtLjcwOHpNOCAxMGEuNS41IDAgMCAxIC41LjV2My43OTNsMS4xNDYtMS4xNDdhLjUuNSAwIDAgMSAuNzA4LjcwOGwtMiAyYS41LjUgMCAwIDEtLjcwOCAwbC0yLTJhLjUuNSAwIDAgMSAuNzA4LS43MDhMNy41IDE0LjI5M1YxMC41QS41LjUgMCAwIDEgOCAxME0uMTQ2IDguMzU0YS41LjUgMCAwIDEgMC0uNzA4bDItMmEuNS41IDAgMSAxIC43MDguNzA4TDEuNzA3IDcuNUg1LjVhLjUuNSAwIDAgMSAwIDFIMS43MDdsMS4xNDcgMS4xNDZhLjUuNSAwIDAgMS0uNzA4LjcwOHpNMTAgOGEuNS41IDAgMCAxIC41LS41aDMuNzkzbC0xLjE0Ny0xLjE0NmEuNS41IDAgMCAxIC43MDgtLjcwOGwyIDJhLjUuNSAwIDAgMSAwIC43MDhsLTIgMmEuNS41IDAgMCAxLS43MDgtLjcwOEwxNC4yOTMgOC41SDEwLjVBLjUuNSAwIDAgMSAxMCA4Ii8+Cjwvc3ZnPg==)*/
const ArrowsMove: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="arrows-move"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
</svg>
      )}
    />
  );

export default ArrowsMove;

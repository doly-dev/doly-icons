import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![box-arrow-left](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDEyLjVhLjUuNSAwIDAgMCAuNS41aDhhLjUuNSAwIDAgMCAuNS0uNXYtOWEuNS41IDAgMCAwLS41LS41aC04YS41LjUgMCAwIDAtLjUuNXYyYS41LjUgMCAwIDEtMSAwdi0yQTEuNSAxLjUgMCAwIDEgNi41IDJoOEExLjUgMS41IDAgMCAxIDE2IDMuNXY5YTEuNSAxLjUgMCAwIDEtMS41IDEuNWgtOEExLjUgMS41IDAgMCAxIDUgMTIuNXYtMmEuNS41IDAgMCAxIDEgMHoiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0uMTQ2IDguMzU0YS41LjUgMCAwIDEgMC0uNzA4bDMtM2EuNS41IDAgMSAxIC43MDguNzA4TDEuNzA3IDcuNUgxMC41YS41LjUgMCAwIDEgMCAxSDEuNzA3bDIuMTQ3IDIuMTQ2YS41LjUgMCAwIDEtLjcwOC43MDh6Ii8+Cjwvc3ZnPg==)*/
const BoxArrowLeft: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="box-arrow-left"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg>
      )}
    />
  );

export default BoxArrowLeft;

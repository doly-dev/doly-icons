import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-wav](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMnYtMWExIDEgMCAwIDAgMS0xVjQuNWgtMkExLjUgMS41IDAgMCAxIDkuNSAzVjFINGExIDEgMCAwIDAtMSAxdjlIMlYyYTIgMiAwIDAgMSAyLTJoNS41ek0xLjc4NCAxNS44NDlsLjc0MS0yLjc4OWguMDMzbC43NCAyLjc4OWguNzNsMS4wNTUtMy45OTloLS44NThsLS41OTUgMi45MDNoLS4wNDFsLS43MDYtMi45MDNIMi4ybC0uNzA2IDIuOTAzaC0uMDM4bC0uNi0yLjkwM0gwbDEuMDU1IDMuOTk5em0zLjcxNSAwIC4zMTQtMS4wMjhoMS4zMzZsLjMxMyAxLjAyOGguODQxTDYuOTY3IDExLjg1aC0uOTI2TDQuNyAxNS44NDloLjhabTEuMDAyLTMuMjM0LjQ5IDEuNjE3SDUuOTc3bC40OS0xLjYxN0g2LjVabTMuNjA0IDMuMjM0aC0uOTUyTDcuODE0IDExLjg1aC45MTdsLjg5NyAzLjEzOGguMDM4bC44ODgtMy4xMzhoLjg3OXoiLz4KPC9zdmc+)*/
const FiletypeWav: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-wav"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.784 15.849l.741-2.789h.033l.74 2.789h.73l1.055-3.999h-.858l-.595 2.903h-.041l-.706-2.903H2.2l-.706 2.903h-.038l-.6-2.903H0l1.055 3.999zm3.715 0 .314-1.028h1.336l.313 1.028h.841L6.967 11.85h-.926L4.7 15.849h.8Zm1.002-3.234.49 1.617H5.977l.49-1.617H6.5Zm3.604 3.234h-.952L7.814 11.85h.917l.897 3.138h.038l.888-3.138h.879z"/>
</svg>
      )}
    />
  );

export default FiletypeWav;

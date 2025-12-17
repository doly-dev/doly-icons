import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![pencil-square](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUuNTAyIDEuOTRhLjUuNSAwIDAgMSAwIC43MDZMMTQuNDU5IDMuNjlsLTItMkwxMy41MDIuNjQ2YS41LjUgMCAwIDEgLjcwNyAwbDEuMjkzIDEuMjkzem0tMS43NSAyLjQ1Ni0yLTJMNC45MzkgOS4yMWEuNS41IDAgMCAwLS4xMjEuMTk2bC0uODA1IDIuNDE0YS4yNS4yNSAwIDAgMCAuMzE2LjMxNmwyLjQxNC0uODA1YS41LjUgMCAwIDAgLjE5Ni0uMTJsNi44MTMtNi44MTR6Ii8+CiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMSAxMy41QTEuNSAxLjUgMCAwIDAgMi41IDE1aDExYTEuNSAxLjUgMCAwIDAgMS41LTEuNXYtNmEuNS41IDAgMCAwLTEgMHY2YS41LjUgMCAwIDEtLjUuNWgtMTFhLjUuNSAwIDAgMS0uNS0uNXYtMTFhLjUuNSAwIDAgMSAuNS0uNUg5YS41LjUgMCAwIDAgMC0xSDIuNUExLjUgMS41IDAgMCAwIDEgMi41eiIvPgo8L3N2Zz4=)*/
const PencilSquare: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="pencil-square"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
      )}
    />
  );

export default PencilSquare;

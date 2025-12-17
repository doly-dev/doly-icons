import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![stopwatch](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDUuNmEuNS41IDAgMSAwLTEgMHYyLjloLTNhLjUuNSAwIDAgMCAwIDFIOGEuNS41IDAgMCAwIC41LS41eiIvPgogIDxwYXRoIGQ9Ik02LjUgMUEuNS41IDAgMCAxIDcgLjVoMmEuNS41IDAgMCAxIDAgMXYuNTdjMS4zNi4xOTYgMi41OTQuNzggMy41ODQgMS42NGwuMDEyLS4wMTMuMzU0LS4zNTQtLjM1NC0uMzUzYS41LjUgMCAwIDEgLjcwNy0uNzA4bDEuNDE0IDEuNDE1YS41LjUgMCAxIDEtLjcwNy43MDdsLS4zNTMtLjM1NC0uMzU0LjM1NC0uMDEzLjAxMkE3IDcgMCAxIDEgNyAyLjA3MVYxLjVhLjUuNSAwIDAgMS0uNS0uNU04IDNhNiA2IDAgMSAwIC4wMDEgMTJBNiA2IDAgMCAwIDggMyIvPgo8L3N2Zz4=)*/
const Stopwatch: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="stopwatch"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5z"/>
  <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64l.012-.013.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5M8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3"/>
</svg>
      )}
    />
  );

export default Stopwatch;

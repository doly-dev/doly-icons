import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-zip](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNi41IDcuNWExIDEgMCAwIDEgMS0xaDFhMSAxIDAgMCAxIDEgMXYuOTM4bC40IDEuNTk5YTEgMSAwIDAgMS0uNDE2IDEuMDc0bC0uOTMuNjJhMSAxIDAgMCAxLTEuMTA5IDBsLS45My0uNjJhMSAxIDAgMCAxLS40MTUtMS4wNzRsLjQtMS41OTl6bTIgMGgtMXYuOTM4YTEgMSAwIDAgMS0uMDMuMjQzbC0uNCAxLjU5OC45My42Mi45My0uNjItLjQtMS41OThhMSAxIDAgMCAxLS4wMy0uMjQzeiIvPgogIDxwYXRoIGQ9Ik0yIDJhMiAyIDAgMCAxIDItMmg4YTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ6bTUuNS0xSDRhMSAxIDAgMCAwLTEgMXYxMmExIDEgMCAwIDAgMSAxaDhhMSAxIDAgMCAwIDEtMVYyYTEgMSAwIDAgMC0xLTFIOXYxSDh2MWgxdjFIOHYxaDF2MUg3LjVWNWgtMVY0aDFWM2gtMVYyaDF6Ii8+Cjwvc3ZnPg==)*/
const FileZip: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-zip"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243z"/>
  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1z"/>
</svg>
      )}
    />
  );

export default FileZip;

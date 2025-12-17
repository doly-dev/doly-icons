import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![file-image-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNCAwaDhhMiAyIDAgMCAxIDIgMnY4LjI5M2wtMi43My0yLjczYTEgMSAwIDAgMC0xLjUyLjEyN2wtMS44ODkgMi42NDQtMS43NjktMS4wNjJhMSAxIDAgMCAwLTEuMjIyLjE1TDIgMTIuMjkyVjJhMiAyIDAgMCAxIDItMm00LjAwMiA1LjVhMS41IDEuNSAwIDEgMC0zIDAgMS41IDEuNSAwIDAgMCAzIDAiLz4KICA8cGF0aCBkPSJNMTAuNTY0IDguMjcgMTQgMTEuNzA4VjE0YTIgMiAwIDAgMS0yIDJINGEyIDIgMCAwIDEtMi0ydi0uMjkzbDMuNTc4LTMuNTc3IDIuNTYgMS41MzYgMi40MjYtMy4zOTV6Ii8+Cjwvc3ZnPg==)*/
const FileImageFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="file-image-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M4 0h8a2 2 0 0 1 2 2v8.293l-2.73-2.73a1 1 0 0 0-1.52.127l-1.889 2.644-1.769-1.062a1 1 0 0 0-1.222.15L2 12.292V2a2 2 0 0 1 2-2m4.002 5.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
  <path d="M10.564 8.27 14 11.708V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-.293l3.578-3.577 2.56 1.536 2.426-3.395z"/>
</svg>
      )}
    />
  );

export default FileImageFill;

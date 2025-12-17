import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![eye-slash-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMTAuNzkgMTIuOTEyLTEuNjE0LTEuNjE1YTMuNSAzLjUgMCAwIDEtNC40NzQtNC40NzRsLTIuMDYtMi4wNkMuOTM4IDYuMjc4IDAgOCAwIDhzMyA1LjUgOCA1LjVhNyA3IDAgMCAwIDIuNzktLjU4OE01LjIxIDMuMDg4QTcgNyAwIDAgMSA4IDIuNWM1IDAgOCA1LjUgOCA1LjVzLS45MzkgMS43MjEtMi42NDEgMy4yMzhsLTIuMDYyLTIuMDYyYTMuNSAzLjUgMCAwIDAtNC40NzQtNC40NzR6Ii8+CiAgPHBhdGggZD0iTTUuNTI1IDcuNjQ2YTIuNSAyLjUgMCAwIDAgMi44MjkgMi44Mjl6bTQuOTUuNzA4LTIuODI5LTIuODNhMi41IDIuNSAwIDAgMSAyLjgyOSAyLjgyOXptMy4xNzEgNi0xMi0xMiAuNzA4LS43MDggMTIgMTJ6Ii8+Cjwvc3ZnPg==)*/
const EyeSlashFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="eye-slash-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7 7 0 0 0 2.79-.588M5.21 3.088A7 7 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474z"/>
  <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
</svg>
      )}
    />
  );

export default EyeSlashFill;

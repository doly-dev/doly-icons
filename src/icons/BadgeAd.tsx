import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-ad](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtMy43IDExIC40Ny0xLjU0MmgyLjAwNEw2LjY0NCAxMWgxLjI2MUw1LjkwMSA1LjAwMUg0LjUxM0wyLjUgMTF6bTEuNTAzLTQuODUyLjczNCAyLjQyNkg0LjQxNmwuNzM0LTIuNDI2em00Ljc1OS4xMjhjLTEuMDU5IDAtMS43NTMuNzY1LTEuNzUzIDIuMDQzdi42OTVjMCAxLjI3OS42ODUgMi4wNDMgMS43NCAyLjA0My42NzcgMCAxLjIyMi0uMzMgMS4zNjctLjgwNGguMDU3VjExaDEuMTM4VjQuNjg1aC0xLjE2djIuMzZoLS4wNTNjLS4xOC0uNDc1LS42OC0uNzctMS4zMzYtLjc3em0uMzg3LjkyM2MuNTggMCAxLjAwMi40NCAxLjAwMiAxLjEzOHYuNjAyYzAgLjc2LS4zOTYgMS4yLS45ODQgMS4yLS41OTggMC0uOTcyLS40NDktLjk3Mi0xLjI0OHYtLjQ1M2MwLS43OTUuMzctMS4yNC45NTQtMS4yNHoiLz4KICA8cGF0aCBkPSJNMTQgM2ExIDEgMCAwIDEgMSAxdjhhMSAxIDAgMCAxLTEgMUgyYTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xek0yIDJhMiAyIDAgMCAwLTIgMnY4YTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlY0YTIgMiAwIDAgMC0yLTJ6Ii8+Cjwvc3ZnPg==)*/
const BadgeAd: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-ad"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m3.7 11 .47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11zm1.503-4.852.734 2.426H4.416l.734-2.426zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.16v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z"/>
  <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
</svg>
      )}
    />
  );

export default BadgeAd;

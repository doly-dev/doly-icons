import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![camera2](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNSA4YzAtMS42NTcgMi4zNDMtMyA0LTNWNGE0IDQgMCAwIDAtNCA0Ii8+CiAgPHBhdGggZD0iTTEyLjMxOCAzaDIuMDE1QzE1LjI1MyAzIDE2IDMuNzQ2IDE2IDQuNjY3djYuNjY2YzAgLjkyLS43NDYgMS42NjctMS42NjcgMS42NjdoLTIuMDE1QTUuOTcgNS45NyAwIDAgMSA5IDE0YTUuOTcgNS45NyAwIDAgMS0zLjMxOC0xSDEuNjY3Qy43NDcgMTMgMCAxMi4yNTQgMCAxMS4zMzNWNC42NjdDMCAzLjc0Ny43NDYgMyAxLjY2NyAzSDJhMSAxIDAgMCAxIDEtMWgxYTEgMSAwIDAgMSAxIDFoLjY4MkE1Ljk3IDUuOTcgMCAwIDEgOSAyYzEuMjI3IDAgMi4zNjcuMzY4IDMuMzE4IDFNMiA0LjVhLjUuNSAwIDEgMC0xIDAgLjUuNSAwIDAgMCAxIDBNMTQgOEE1IDUgMCAxIDAgNCA4YTUgNSAwIDAgMCAxMCAwIi8+Cjwvc3ZnPg==)*/
const Camera2: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="camera2"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4"/>
  <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0"/>
</svg>
      )}
    />
  );

export default Camera2;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![megaphone-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMgMi41YTEuNSAxLjUgMCAwIDEgMyAwdjExYTEuNSAxLjUgMCAwIDEtMyAwem0tMSAuNzI0Yy0yLjA2Ny45NS00LjUzOSAxLjQ4MS03IDEuNjU2djYuMjM3YTI1IDI1IDAgMCAxIDEuMDg4LjA4NWMyLjA1My4yMDQgNC4wMzguNjY4IDUuOTEyIDEuNTZ6bS04IDcuODQxVjQuOTM0Yy0uNjguMDI3LTEuMzk5LjA0My0yLjAwOC4wNTNBMi4wMiAyLjAyIDAgMCAwIDAgN3YyYzAgMS4xMDYuODk2IDEuOTk2IDEuOTk0IDIuMDA5bC40OTYuMDA4YTY0IDY0IDAgMCAxIDEuNTEuMDQ4bTEuMzkgMS4wODFxLjQyOC4wMzIuODUuMDc4bC4yNTMgMS42OWExIDEgMCAwIDEtLjk4MyAxLjE4N2gtLjU0OGExIDEgMCAwIDEtLjkxNi0uNTk5bC0xLjMxNC0yLjQ4YTY2IDY2IDAgMCAxIDEuNjkyLjA2NHEuNDkxLjAyNi45NjYuMDYiLz4KPC9zdmc+)*/
const MegaphoneFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="megaphone-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06"/>
</svg>
      )}
    />
  );

export default MegaphoneFill;

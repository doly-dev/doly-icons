import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![tv](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi41IDEzLjVBLjUuNSAwIDAgMSAzIDEzaDEwYS41LjUgMCAwIDEgMCAxSDNhLjUuNSAwIDAgMS0uNS0uNU0xMy45OTEgM2wuMDI0LjAwMWExLjUgMS41IDAgMCAxIC41MzguMTQzLjc2Ljc2IDAgMCAxIC4zMDIuMjU0Yy4wNjcuMS4xNDUuMjc3LjE0NS42MDJ2NS45OTFsLS4wMDEuMDI0YTEuNSAxLjUgMCAwIDEtLjE0My41MzguNzYuNzYgMCAwIDEtLjI1NC4zMDJjLS4xLjA2Ny0uMjc3LjE0NS0uNjAyLjE0NUgyLjAwOWwtLjAyNC0uMDAxYTEuNSAxLjUgMCAwIDEtLjUzOC0uMTQzLjc2Ljc2IDAgMCAxLS4zMDItLjI1NEMxLjA3OCAxMC41MDIgMSAxMC4zMjUgMSAxMFY0LjAwOWwuMDAxLS4wMjRhMS41IDEuNSAwIDAgMSAuMTQzLS41MzguNzYuNzYgMCAwIDEgLjI1NC0uMzAyQzEuNDk4IDMuMDc4IDEuNjc1IDMgMiAzek0xNCAySDJDMCAyIDAgNCAwIDR2NmMwIDIgMiAyIDIgMmgxMmMyIDAgMi0yIDItMlY0YzAtMi0yLTItMi0yIi8+Cjwvc3ZnPg==)*/
const Tv: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="tv"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
</svg>
      )}
    />
  );

export default Tv;

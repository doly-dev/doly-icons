import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![unity](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTUgMTEuMlYzLjczM0w4LjYxIDB2Mi44NjdsMi41MDMgMS40NjZjLjA5OS4wNjcuMDk5LjIgMCAuMjM0TDguMTQ4IDYuM2MtLjA5OS4wNjctLjE5Ny4wMzMtLjI2MyAwTDQuOTIgNC41NjdjLS4wOTktLjAzNC0uMDk5LS4yIDAtLjIzNGwyLjUwNC0xLjQ2NlYwTDEgMy43MzNWMTEuMnYtLjAzMy4wMzNsMi40MzgtMS40MzNWNi44MzNjMC0uMS4xMzEtLjE2Ni4xOTctLjEzM0w2LjYgOC40MzNjLjA5OS4wNjcuMTMyLjEzNC4xMzIuMjM0djMuNDY2YzAgLjEtLjEzMi4xNjctLjE5OC4xMzRMNC4wMzEgMTAuOGwtMi40MzggMS40MzNMNy45ODMgMTZsNi4zOTEtMy43MzMtMi40MzgtMS40MzRMOS40MzQgMTIuM2MtLjA5OS4wNjctLjE5OCAwLS4xOTgtLjEzM1Y4LjdjMC0uMS4wNjYtLjIuMTMyLS4yMzNsMi45NjUtMS43MzRjLjA5OS0uMDY2LjE5NyAwIC4xOTcuMTM0VjkuOHoiLz4KPC9zdmc+)*/
const Unity: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="unity"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M15 11.2V3.733L8.61 0v2.867l2.503 1.466c.099.067.099.2 0 .234L8.148 6.3c-.099.067-.197.033-.263 0L4.92 4.567c-.099-.034-.099-.2 0-.234l2.504-1.466V0L1 3.733V11.2v-.033.033l2.438-1.433V6.833c0-.1.131-.166.197-.133L6.6 8.433c.099.067.132.134.132.234v3.466c0 .1-.132.167-.198.134L4.031 10.8l-2.438 1.433L7.983 16l6.391-3.733-2.438-1.434L9.434 12.3c-.099.067-.198 0-.198-.133V8.7c0-.1.066-.2.132-.233l2.965-1.734c.099-.066.197 0 .197.134V9.8z"/>
</svg>
      )}
    />
  );

export default Unity;

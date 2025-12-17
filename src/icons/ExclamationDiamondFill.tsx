import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![exclamation-diamond-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS4wNS40MzVjLS41OC0uNTgtMS41Mi0uNTgtMi4xIDBMLjQzNiA2Ljk1Yy0uNTguNTgtLjU4IDEuNTE5IDAgMi4wOThsNi41MTYgNi41MTZjLjU4LjU4IDEuNTE5LjU4IDIuMDk4IDBsNi41MTYtNi41MTZjLjU4LS41OC41OC0xLjUxOSAwLTIuMDk4ek04IDRjLjUzNSAwIC45NTQuNDYyLjkuOTk1bC0uMzUgMy41MDdhLjU1Mi41NTIgMCAwIDEtMS4xIDBMNy4xIDQuOTk1QS45MDUuOTA1IDAgMCAxIDggNG0uMDAyIDZhMSAxIDAgMSAxIDAgMiAxIDEgMCAwIDEgMC0yIi8+Cjwvc3ZnPg==)*/
const ExclamationDiamondFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="exclamation-diamond-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>
      )}
    />
  );

export default ExclamationDiamondFill;

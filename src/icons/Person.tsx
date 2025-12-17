import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCA4YTMgMyAwIDEgMCAwLTYgMyAzIDAgMCAwIDAgNm0yLTNhMiAyIDAgMSAxLTQgMCAyIDIgMCAwIDEgNCAwbTQgOGMwIDEtMSAxLTEgMUgzcy0xIDAtMS0xIDEtNCA2LTQgNiAzIDYgNG0tMS0uMDA0Yy0uMDAxLS4yNDYtLjE1NC0uOTg2LS44MzItMS42NjRDMTEuNTE2IDEwLjY4IDEwLjI4OSAxMCA4IDEwcy0zLjUxNi42OC00LjE2OCAxLjMzMmMtLjY3OC42NzgtLjgzIDEuNDE4LS44MzIgMS42NjR6Ii8+Cjwvc3ZnPg==)*/
const Person: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
      )}
    />
  );

export default Person;

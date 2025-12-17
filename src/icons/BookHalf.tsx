import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![book-half](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOC41IDIuNjg3Yy42NTQtLjY4OSAxLjc4Mi0uODg2IDMuMTEyLS43NTIgMS4yMzQuMTI0IDIuNTAzLjUyMyAzLjM4OC44OTN2OS45MjNjLS45MTgtLjM1LTIuMTA3LS42OTItMy4yODctLjgxLTEuMDk0LS4xMTEtMi4yNzgtLjAzOS0zLjIxMy40OTJ6TTggMS43ODNDNy4wMTUuOTM2IDUuNTg3LjgxIDQuMjg3Ljk0Yy0xLjUxNC4xNTMtMy4wNDIuNjcyLTMuOTk0IDEuMTA1QS41LjUgMCAwIDAgMCAyLjV2MTFhLjUuNSAwIDAgMCAuNzA3LjQ1NWMuODgyLS40IDIuMzAzLS44ODEgMy42OC0xLjAyIDEuNDA5LS4xNDIgMi41OS4wODcgMy4yMjMuODc3YS41LjUgMCAwIDAgLjc4IDBjLjYzMy0uNzkgMS44MTQtMS4wMTkgMy4yMjItLjg3NyAxLjM3OC4xMzkgMi44LjYyIDMuNjgxIDEuMDJBLjUuNSAwIDAgMCAxNiAxMy41di0xMWEuNS41IDAgMCAwLS4yOTMtLjQ1NWMtLjk1Mi0uNDMzLTIuNDgtLjk1Mi0zLjk5NC0xLjEwNUMxMC40MTMuODA5IDguOTg1LjkzNiA4IDEuNzgzIi8+Cjwvc3ZnPg==)*/
const BookHalf: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="book-half"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783"/>
</svg>
      )}
    />
  );

export default BookHalf;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![wrench](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNLjEwMiAyLjIyM0EzLjAwNCAzLjAwNCAwIDAgMCAzLjc4IDUuODk3bDYuMzQxIDYuMjUyQTMuMDAzIDMuMDAzIDAgMCAwIDEzIDE2YTMgMyAwIDEgMC0uODUxLTUuODc4TDUuODk3IDMuNzgxQTMuMDA0IDMuMDA0IDAgMCAwIDIuMjIzLjFsMi4xNDEgMi4xNDJMNCA0bC0xLjc1Ny4zNjR6bTEzLjM3IDkuMDE5LjUyOC4wMjYuMjg3LjQ0NS40NDUuMjg3LjAyNi41MjlMMTUgMTNsLS4yNDIuNDcxLS4wMjYuNTI5LS40NDUuMjg3LS4yODcuNDQ1LS41MjkuMDI2TDEzIDE1bC0uNDcxLS4yNDItLjUyOS0uMDI2LS4yODctLjQ0NS0uNDQ1LS4yODctLjAyNi0uNTI5TDExIDEzbC4yNDItLjQ3MS4wMjYtLjUyOS40NDUtLjI4Ny4yODctLjQ0NS41MjktLjAyNkwxMyAxMXoiLz4KPC9zdmc+)*/
const Wrench: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="wrench"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364zm13.37 9.019.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11z"/>
</svg>
      )}
    />
  );

export default Wrench;

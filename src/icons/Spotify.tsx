import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![spotify](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAwYTggOCAwIDEgMCAwIDE2QTggOCAwIDAgMCA4IDBtMy42NjkgMTEuNTM4YS41LjUgMCAwIDEtLjY4Ni4xNjVjLTEuODc5LTEuMTQ3LTQuMjQzLTEuNDA3LTcuMDI4LS43N2EuNDk5LjQ5OSAwIDAgMS0uMjIyLS45NzNjMy4wNDgtLjY5NiA1LjY2Mi0uMzk3IDcuNzcuODkyYS41LjUgMCAwIDEgLjE2Ni42ODZtLjk3OS0yLjE3OGEuNjI0LjYyNCAwIDAgMS0uODU4LjIwNWMtMi4xNS0xLjMyMS01LjQyOC0xLjcwNC03Ljk3Mi0uOTMyYS42MjUuNjI1IDAgMCAxLS4zNjItMS4xOTRjMi45MDUtLjg4MSA2LjUxNy0uNDU0IDguOTg2IDEuMDYzYS42MjQuNjI0IDAgMCAxIC4yMDYuODU4bS4wODQtMi4yNjhDMTAuMTU0IDUuNTYgNS45IDUuNDE5IDMuNDM4IDYuMTY2YS43NDguNzQ4IDAgMSAxLS40MzQtMS40MzJjMi44MjUtLjg1NyA3LjUyMy0uNjkyIDEwLjQ5MiAxLjA3YS43NDcuNzQ3IDAgMSAxLS43NjQgMS4yODgiLz4KPC9zdmc+)*/
const Spotify: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="spotify"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
</svg>
      )}
    />
  );

export default Spotify;

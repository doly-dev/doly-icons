import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![trash3-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEgMS41djFoMy41YS41LjUgMCAwIDEgMCAxaC0uNTM4bC0uODUzIDEwLjY2QTIgMiAwIDAgMSAxMS4xMTUgMTZoLTYuMjNhMiAyIDAgMCAxLTEuOTk0LTEuODRMMi4wMzggMy41SDEuNWEuNS41IDAgMCAxIDAtMUg1di0xQTEuNSAxLjUgMCAwIDEgNi41IDBoM0ExLjUgMS41IDAgMCAxIDExIDEuNW0tNSAwdjFoNHYtMWEuNS41IDAgMCAwLS41LS41aC0zYS41LjUgMCAwIDAtLjUuNU00LjUgNS4wMjlsLjUgOC41YS41LjUgMCAxIDAgLjk5OC0uMDZsLS41LTguNWEuNS41IDAgMSAwLS45OTguMDZtNi41My0uNTI4YS41LjUgMCAwIDAtLjUyOC40N2wtLjUgOC41YS41LjUgMCAwIDAgLjk5OC4wNThsLjUtOC41YS41LjUgMCAwIDAtLjQ3LS41MjhNOCA0LjVhLjUuNSAwIDAgMC0uNS41djguNWEuNS41IDAgMCAwIDEgMFY1YS41LjUgMCAwIDAtLjUtLjUiLz4KPC9zdmc+)*/
const Trash3Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="trash3-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>
      )}
    />
  );

export default Trash3Fill;

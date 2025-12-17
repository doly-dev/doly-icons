import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![forward](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOS41MDIgNS41MTNhLjE0NC4xNDQgMCAwIDAtLjIwMi4xMzRWNi42NWEuNS41IDAgMCAxLS41LjVIMi41djIuOWg2LjNhLjUuNSAwIDAgMSAuNS41djEuMDAzYzAgLjEwOC4xMS4xNzYuMjAyLjEzNGwzLjk4NC0yLjkzMy4wNDItLjAyOGEuMTQ3LjE0NyAwIDAgMCAwLS4yNTJsLS4wNDItLjAyOHpNOC4zIDUuNjQ3YTEuMTQ0IDEuMTQ0IDAgMCAxIDEuNzY3LS45NmwzLjk5NCAyLjk0YTEuMTQ3IDEuMTQ3IDAgMCAxIDAgMS45NDZsLTMuOTk0IDIuOTRhMS4xNDQgMS4xNDQgMCAwIDEtMS43NjctLjk2di0uNTAzSDJhLjUuNSAwIDAgMS0uNS0uNXYtMy45YS41LjUgMCAwIDEgLjUtLjVoNi4zeiIvPgo8L3N2Zz4=)*/
const Forward: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="forward"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M9.502 5.513a.144.144 0 0 0-.202.134V6.65a.5.5 0 0 1-.5.5H2.5v2.9h6.3a.5.5 0 0 1 .5.5v1.003c0 .108.11.176.202.134l3.984-2.933.042-.028a.147.147 0 0 0 0-.252l-.042-.028zM8.3 5.647a1.144 1.144 0 0 1 1.767-.96l3.994 2.94a1.147 1.147 0 0 1 0 1.946l-3.994 2.94a1.144 1.144 0 0 1-1.767-.96v-.503H2a.5.5 0 0 1-.5-.5v-3.9a.5.5 0 0 1 .5-.5h6.3z"/>
</svg>
      )}
    />
  );

export default Forward;

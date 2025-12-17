import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![save](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMiAxYTEgMSAwIDAgMC0xIDF2MTJhMSAxIDAgMCAwIDEgMWgxMmExIDEgMCAwIDAgMS0xVjJhMSAxIDAgMCAwLTEtMUg5LjVhMSAxIDAgMCAwLTEgMXY3LjI5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMCAxIC43MDguNzA4bC0zLjUgMy41YS41LjUgMCAwIDEtLjcwOCAwbC0zLjUtMy41YS41LjUgMCAxIDEgLjcwOC0uNzA4TDcuNSA5LjI5M1YyYTIgMiAwIDAgMSAyLTJIMTRhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyYTIgMiAwIDAgMSAyLTJoMi41YS41LjUgMCAwIDEgMCAxeiIvPgo8L3N2Zz4=)*/
const Save: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="save"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z"/>
</svg>
      )}
    />
  );

export default Save;

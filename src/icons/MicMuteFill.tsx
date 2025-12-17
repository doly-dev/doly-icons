import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![mic-mute-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTMgOGMwIC41NjQtLjA5NCAxLjEwNy0uMjY2IDEuNjEzbC0uODE0LS44MTRBNCA0IDAgMCAwIDEyIDhWN2EuNS41IDAgMCAxIDEgMHptLTUgNGMuODE4IDAgMS41NzgtLjI0NSAyLjIxMi0uNjY3bC43MTguNzE5YTUgNSAwIDAgMS0yLjQzLjkyM1YxNWgzYS41LjUgMCAwIDEgMCAxaC03YS41LjUgMCAwIDEgMC0xaDN2LTIuMDI1QTUgNSAwIDAgMSAzIDhWN2EuNS41IDAgMCAxIDEgMHYxYTQgNCAwIDAgMCA0IDRtMy05djQuODc5TDUuMTU4IDIuMDM3QTMuMDAxIDMuMDAxIDAgMCAxIDExIDMiLz4KICA8cGF0aCBkPSJNOS40ODYgMTAuNjA3IDUgNi4xMlY4YTMgMyAwIDAgMCA0LjQ4NiAyLjYwN20tNy44NC05LjI1MyAxMiAxMiAuNzA4LS43MDgtMTItMTJ6Ii8+Cjwvc3ZnPg==)*/
const MicMuteFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="mic-mute-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3"/>
  <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z"/>
</svg>
      )}
    />
  );

export default MicMuteFill;

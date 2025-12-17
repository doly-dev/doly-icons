import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cloud-sun-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTEuNDczIDExYTQuNSA0LjUgMCAwIDAtOC43Mi0uOTlBMyAzIDAgMCAwIDMgMTZoOC41YTIuNSAyLjUgMCAwIDAgMC01eiIvPgogIDxwYXRoIGQ9Ik0xMC41IDEuNWEuNS41IDAgMCAwLTEgMHYxYS41LjUgMCAwIDAgMSAwem0zLjc0MyAxLjk2NGEuNS41IDAgMSAwLS43MDctLjcwN2wtLjcwOC43MDdhLjUuNSAwIDAgMCAuNzA4LjcwOHptLTcuNzc5LS43MDdhLjUuNSAwIDAgMC0uNzA3LjcwN2wuNzA3LjcwOGEuNS41IDAgMSAwIC43MDgtLjcwOHptMS43MzQgMy4zNzRhMiAyIDAgMSAxIDMuMjk2IDIuMTk4cS4zLjQyMy41MTYuODk4YTMgMyAwIDEgMC00Ljg0LTMuMjI1cS41MjkuMDE3IDEuMDI4LjEyOW00LjQ4NCA0LjA3NGMuNi4yMTUgMS4xMjUuNTkgMS41MjIgMS4wNzJhLjUuNSAwIDAgMCAuMDM5LS43NDJsLS43MDctLjcwN2EuNS41IDAgMCAwLS44NTQuMzc3TTE0LjUgNi41YS41LjUgMCAwIDAgMCAxaDFhLjUuNSAwIDAgMCAwLTF6Ii8+Cjwvc3ZnPg==)*/
const CloudSunFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cloud-sun-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M11.473 11a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z"/>
  <path d="M10.5 1.5a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0zm3.743 1.964a.5.5 0 1 0-.707-.707l-.708.707a.5.5 0 0 0 .708.708zm-7.779-.707a.5.5 0 0 0-.707.707l.707.708a.5.5 0 1 0 .708-.708zm1.734 3.374a2 2 0 1 1 3.296 2.198q.3.423.516.898a3 3 0 1 0-4.84-3.225q.529.017 1.028.129m4.484 4.074c.6.215 1.125.59 1.522 1.072a.5.5 0 0 0 .039-.742l-.707-.707a.5.5 0 0 0-.854.377M14.5 6.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z"/>
</svg>
      )}
    />
  );

export default CloudSunFill;

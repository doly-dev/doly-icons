import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cookie](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNNiA3LjVhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBtNC41LjVhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDNtLS41IDMuNWExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgMCIvPgogIDxwYXRoIGQ9Ik04IDBhNy45NiA3Ljk2IDAgMCAwLTQuMDc1IDEuMTE0cS0uMjQ1LjEwMi0uNDM3LjI4QTggOCAwIDEgMCA4IDBtMy4yNSAxNC4yMDFhMS41IDEuNSAwIDAgMC0yLjEzLjcxQTcgNyAwIDAgMSA4IDE1YTYuOTcgNi45NyAwIDAgMS0zLjg0NS0xLjE1IDEuNSAxLjUgMCAxIDAtMi4wMDUtMi4wMDVBNi45NyA2Ljk3IDAgMCAxIDEgOGMwLTEuOTUzLjgtMy43MTkgMi4wOS00Ljk4OWExLjUgMS41IDAgMSAwIDIuNDY5LTEuNTc0QTcgNyAwIDAgMSA4IDFjMS40MiAwIDIuNzQyLjQyMyAzLjg0NSAxLjE1YTEuNSAxLjUgMCAxIDAgMi4wMDUgMi4wMDVBNi45NyA2Ljk3IDAgMCAxIDE1IDhjMCAuNTk2LS4wNzQgMS4xNzQtLjIxNCAxLjcyN2ExLjUgMS41IDAgMSAwLTEuMDI1IDIuMjUgNyA3IDAgMCAxLTIuNTEgMi4yMjRaIi8+Cjwvc3ZnPg==)*/
const Cookie: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cookie"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M6 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4.5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M8 0a7.96 7.96 0 0 0-4.075 1.114q-.245.102-.437.28A8 8 0 1 0 8 0m3.25 14.201a1.5 1.5 0 0 0-2.13.71A7 7 0 0 1 8 15a6.97 6.97 0 0 1-3.845-1.15 1.5 1.5 0 1 0-2.005-2.005A6.97 6.97 0 0 1 1 8c0-1.953.8-3.719 2.09-4.989a1.5 1.5 0 1 0 2.469-1.574A7 7 0 0 1 8 1c1.42 0 2.742.423 3.845 1.15a1.5 1.5 0 1 0 2.005 2.005A6.97 6.97 0 0 1 15 8c0 .596-.074 1.174-.214 1.727a1.5 1.5 0 1 0-1.025 2.25 7 7 0 0 1-2.51 2.224Z"/>
</svg>
      )}
    />
  );

export default Cookie;

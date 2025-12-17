import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-key](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMmgtMXYtMWgxYTEgMSAwIDAgMCAxLTFWNC41aC0yQTEuNSAxLjUgMCAwIDEgOS41IDNWMUg0YTEgMSAwIDAgMC0xIDF2OUgyVjJhMiAyIDAgMCAxIDItMmg1LjV6TTMuMjEgMTEuODVoLS44N0wuODMgMTMuNjRILjc5di0xLjc5SDB2My45OTloLjc5MXYtMS4yODNsLjQxLS40NjYgMS4xMiAxLjc0OWguOTUxbC0xLjQ4OC0yLjI3NiAxLjQyNy0xLjcyM1ptMi45MDMgMy4zNTJoLTEuNzl2LTEuMDczaDEuNjg1di0uNjA2SDQuMzIzdi0xLjAyNWgxLjc5di0uNjQ4SDMuNTM4djMuOTk5aDIuNTc1em0yLjI0My0uODg4djEuNTM1aC0uNzk0di0xLjUyTDYuMjIzIDExLjg1SDcuMWwuODUzIDEuNjk2aC4wMzJsLjg1NS0xLjY5NmguODU2eiIvPgo8L3N2Zz4=)*/
const FiletypeKey: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-key"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.21 11.85h-.87L.83 13.64H.79v-1.79H0v3.999h.791v-1.283l.41-.466 1.12 1.749h.951l-1.488-2.276 1.427-1.723Zm2.903 3.352h-1.79v-1.073h1.685v-.606H4.323v-1.025h1.79v-.648H3.538v3.999h2.575zm2.243-.888v1.535h-.794v-1.52L6.223 11.85H7.1l.853 1.696h.032l.855-1.696h.856z"/>
</svg>
      )}
    />
  );

export default FiletypeKey;

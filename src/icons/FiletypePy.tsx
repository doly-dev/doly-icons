import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![filetype-py](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNCA0LjVWMTRhMiAyIDAgMCAxLTIgMkg3di0xaDVhMSAxIDAgMCAwIDEtMVY0LjVoLTJBMS41IDEuNSAwIDAgMSA5LjUgM1YxSDRhMSAxIDAgMCAwLTEgMXY5SDJWMmEyIDIgMCAwIDEgMi0yaDUuNXpNMCAxMS44NWgxLjZxLjQzNCAwIC43MzIuMTc5LjMwMi4xNzUuNDYuNDc3dC4xNTguNjc3LS4xNi42NzdxLS4xNTguMjk5LS40NjQuNDc0YTEuNDUgMS40NSAwIDAgMS0uNzMyLjE3M0guNzl2MS4zNDJIMHptMi4wNiAxLjcxNGEuOC44IDAgMCAwIC4wODUtLjM4MXEwLS4zNC0uMTg1LS41MjEtLjE4NS0uMTgyLS41MTMtLjE4MkguNzg4djEuNDA2aC42NmEuOC44IDAgMCAwIC4zNzQtLjA4Mi41Ny41NyAwIDAgMCAuMjM4LS4yNG0yLjk2My43NXYxLjUzNUg0LjIzdi0xLjUyTDIuODkgMTEuODVoLjg3NmwuODUzIDEuNjk2aC4wMzJsLjg1Ni0xLjY5NmguODU1eiIvPgo8L3N2Zz4=)*/
const FiletypePy: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="filetype-py"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M14 4.5V14a2 2 0 0 1-2 2H7v-1h5a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM0 11.85h1.6q.434 0 .732.179.302.175.46.477t.158.677-.16.677q-.158.299-.464.474a1.45 1.45 0 0 1-.732.173H.79v1.342H0zm2.06 1.714a.8.8 0 0 0 .085-.381q0-.34-.185-.521-.185-.182-.513-.182H.788v1.406h.66a.8.8 0 0 0 .374-.082.57.57 0 0 0 .238-.24m2.963.75v1.535H4.23v-1.52L2.89 11.85h.876l.853 1.696h.032l.856-1.696h.855z"/>
</svg>
      )}
    />
  );

export default FiletypePy;

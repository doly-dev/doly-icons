import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![trash2-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMi4wMzcgMy4yMjVBLjcuNyAwIDAgMSAyIDNjMC0xLjEwNSAyLjY4Ni0yIDYtMnM2IC44OTUgNiAyYS43LjcgMCAwIDEtLjAzNy4yMjVsLTEuNjg0IDEwLjEwNEEyIDIgMCAwIDEgMTAuMzA1IDE1SDUuNjk0YTIgMiAwIDAgMS0xLjk3My0xLjY3MXptOS44OS0uNjlDMTAuOTY2IDIuMjE0IDkuNTc4IDIgOCAyYy0xLjU4IDAtMi45NjguMjE1LTMuOTI2LjUzNC0uNDc3LjE2LS43OTUuMzI3LS45NzUuNDY2LjE4LjE0LjQ5OC4zMDcuOTc1LjQ2NkM1LjAzMiAzLjc4NiA2LjQyIDQgOCA0czIuOTY3LS4yMTUgMy45MjYtLjUzNGMuNDc3LS4xNi43OTUtLjMyNy45NzUtLjQ2Ni0uMTgtLjE0LS40OTgtLjMwNy0uOTc1LS40NjZ6Ii8+Cjwvc3ZnPg==)*/
const Trash2Fill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="trash2-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671zm9.89-.69C10.966 2.214 9.578 2 8 2c-1.58 0-2.968.215-3.926.534-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466-.18-.14-.498-.307-.975-.466z"/>
</svg>
      )}
    />
  );

export default Trash2Fill;

import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![cast](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtNy42NDYgOS4zNTQtMy43OTIgMy43OTJhLjUuNSAwIDAgMCAuMzUzLjg1NGg3LjU4NmEuNS41IDAgMCAwIC4zNTQtLjg1NEw4LjM1NCA5LjM1NGEuNS41IDAgMCAwLS43MDggMCIvPgogIDxwYXRoIGQ9Ik0xMS40MTQgMTFIMTQuNWEuNS41IDAgMCAwIC41LS41di03YS41LjUgMCAwIDAtLjUtLjVoLTEzYS41LjUgMCAwIDAtLjUuNXY3YS41LjUgMCAwIDAgLjUuNWgzLjA4NmwtMSAxSDEuNUExLjUgMS41IDAgMCAxIDAgMTAuNXYtN0ExLjUgMS41IDAgMCAxIDEuNSAyaDEzQTEuNSAxLjUgMCAwIDEgMTYgMy41djdhMS41IDEuNSAwIDAgMS0xLjUgMS41aC0yLjA4NnoiLz4KPC9zdmc+)*/
const Cast: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="cast"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0"/>
  <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z"/>
</svg>
      )}
    />
  );

export default Cast;

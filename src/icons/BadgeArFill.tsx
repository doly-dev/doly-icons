import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![badge-ar-fill](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJtNi4wMzEgOC41NzQtLjczNC0yLjQyNmgtLjA1Mkw0LjUxIDguNTc0aDEuNTJ6bTMuNjQyLTIuNjQxdjEuOTM4aDEuMDMzYy42NiAwIDEuMDY4LS4zMTYgMS4wNjgtLjk1IDAtLjY0LS40MjItLjk4OC0xLjA1LS45ODh6Ii8+CiAgPHBhdGggZD0iTTAgNGEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2OGEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMnptNC4yNjUgNS40NThoMi4wMDRMNi43MzkgMTFIOEw1Ljk5NiA1LjAwMUg0LjYwN0wyLjU5NSAxMWgxLjJ6TTguNSA1djZoMS4xNzNWOC43NjNoMS4wNjRMMTEuNzg3IDExaDEuMzI3TDExLjkxIDguNTgzQzEyLjQ1NSA4LjM3MyAxMyA3Ljc3OSAxMyA2LjljMC0xLjE0Ny0uNzczLTEuOS0yLjEwNS0xLjl6Ii8+Cjwvc3ZnPg==)*/
const BadgeArFill: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="badge-ar-fill"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="m6.031 8.574-.734-2.426h-.052L4.51 8.574h1.52zm3.642-2.641v1.938h1.033c.66 0 1.068-.316 1.068-.95 0-.64-.422-.988-1.05-.988z"/>
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.265 5.458h2.004L6.739 11H8L5.996 5.001H4.607L2.595 11h1.2zM8.5 5v6h1.173V8.763h1.064L11.787 11h1.327L11.91 8.583C12.455 8.373 13 7.779 13 6.9c0-1.147-.773-1.9-2.105-1.9z"/>
</svg>
      )}
    />
  );

export default BadgeArFill;

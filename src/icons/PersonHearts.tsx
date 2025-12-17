import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![person-hearts](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMS41IDEuMjQ2Yy44MzItLjg1NSAyLjkxMy42NDIgMCAyLjU2Ni0yLjkxMy0xLjkyNC0uODMyLTMuNDIxIDAtMi41NjZNOSA1YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMG0tOSA4YzAgMSAxIDEgMSAxaDEwczEgMCAxLTEtMS00LTYtNC02IDMtNiA0bTEzLjUtOC4wOWMxLjM4Ny0xLjQyNSA0Ljg1NSAxLjA3IDAgNC4yNzctNC44NTQtMy4yMDctMS4zODctNS43MDIgMC00LjI3NlpNMTUgMi4xNjVjLjU1NS0uNTcgMS45NDIuNDI4IDAgMS43MTEtMS45NDItMS4yODMtLjU1NS0yLjI4MSAwLTEuNzFaIi8+Cjwvc3ZnPg==)*/
const PersonHearts: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="person-hearts"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path fillRule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4m13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
</svg>
      )}
    />
  );

export default PersonHearts;

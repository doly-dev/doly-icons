import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![radioactive](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNOCAxYTcgNyAwIDEgMCAwIDE0QTcgNyAwIDAgMCA4IDFNMCA4YTggOCAwIDEgMSAxNiAwQTggOCAwIDAgMSAwIDgiLz4KICA8cGF0aCBkPSJNOS42NTMgNS40OTZBMyAzIDAgMCAwIDggNWMtLjYxIDAtMS4xNzkuMTgzLTEuNjUzLjQ5Nkw0LjY5NCAyLjk5MkE1Ljk3IDUuOTcgMCAwIDEgOCAyYzEuMjIyIDAgMi4zNTguMzY1IDMuMzA2Ljk5MnptMS4zNDIgMi4zMjRhMyAzIDAgMCAxLS44ODQgMi4zMTIgMyAzIDAgMCAxLS43NjkuNTUybDEuMzQyIDIuNjgzYy41Ny0uMjg2IDEuMDktLjY2IDEuNTM4LTEuMTAzYTYgNiAwIDAgMCAxLjc2Ny00LjYyNHptLTUuNjc5IDUuNTQ4IDEuMzQyLTIuNjg0QTMgMyAwIDAgMSA1LjAwNSA3LjgybC0yLjk5NC0uMThhNiA2IDAgMCAwIDMuMzA2IDUuNzI4Wk0xMCA4YTIgMiAwIDEgMS00IDAgMiAyIDAgMCAxIDQgMCIvPgo8L3N2Zz4=)*/
const Radioactive: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="radioactive"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8"/>
  <path d="M9.653 5.496A3 3 0 0 0 8 5c-.61 0-1.179.183-1.653.496L4.694 2.992A5.97 5.97 0 0 1 8 2c1.222 0 2.358.365 3.306.992zm1.342 2.324a3 3 0 0 1-.884 2.312 3 3 0 0 1-.769.552l1.342 2.683c.57-.286 1.09-.66 1.538-1.103a6 6 0 0 0 1.767-4.624zm-5.679 5.548 1.342-2.684A3 3 0 0 1 5.005 7.82l-2.994-.18a6 6 0 0 0 3.306 5.728ZM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
</svg>
      )}
    />
  );

export default Radioactive;

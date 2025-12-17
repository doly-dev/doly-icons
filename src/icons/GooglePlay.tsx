import React from 'react';
import IconBase, { IconBaseProps } from '../icon/IconBase';

/**![google-play](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iI2NjYyIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBkPSJNMTQuMjIyIDkuMzc0YzEuMDM3LS42MSAxLjAzNy0yLjEzNyAwLTIuNzQ4TDExLjUyOCA1LjA0IDguMzIgOGwzLjIwNyAyLjk2em0tMy41OTUgMi4xMTZMNy41ODMgOC42OCAxLjAzIDE0LjczYy4yMDEgMS4wMjkgMS4zNiAxLjYxIDIuMzAzIDEuMDU1ek0xIDEzLjM5NlYyLjYwM0w2Ljg0NiA4ek0xLjAzIDEuMjdsNi41NTMgNi4wNSAzLjA0NC0yLjgxTDMuMzMzLjIxNUMyLjM5LS4zNDEgMS4yMzEuMjQgMS4wMyAxLjI3Ii8+Cjwvc3ZnPg==)*/
const GooglePlay: React.FC<IconBaseProps> = (props) => (
    <IconBase
      aria-label="google-play"
      {...props}
      renderChild={(childProps) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" {...childProps}>
  <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
</svg>
      )}
    />
  );

export default GooglePlay;
